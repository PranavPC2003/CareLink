from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from .serializers import HospitalSerializer, DoctorSerializer, AppointmentSerializer, DoctorSignupSerializer, DoctorLoginSerializer, PatientIntakeSerializer
from .models import Hospital, Doctor, Appointment, DoctorLogin
import pathlib, textwrap, json, os, pymongo, bcrypt
import google.generativeai as genai
from IPython.display import display
from IPython.display import Markdown
from django.http import JsonResponse
from django.views import View
from datetime import datetime, timezone

# Create your views here.
class HospitalListView(generics.ListCreateAPIView):
    queryset = Hospital.objects.all()
    serializer_class = HospitalSerializer

class DoctorListView(generics.ListCreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class AppointmentBooking(generics.ListCreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        
        if serializer.is_valid():
            doctor = serializer.validated_data.get('doctor')
            date = serializer.validated_data.get('date')
            timeslot = serializer.validated_data.get('timeslot')
            
            if Appointment.objects.filter(doctor=doctor, date=date, timeslot=timeslot).exists():
                return Response({"error": "This timeslot is already booked."}, status=status.HTTP_400_BAD_REQUEST)
            
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class DoctorSignupView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = DoctorSignupSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"success": "Doctor registered successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Login View
class DoctorLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = DoctorLoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            
            try:
                doctor_login = DoctorLogin.objects.get(email=email)
            except DoctorLogin.DoesNotExist:
                return Response({"error": "Invalid email or password"}, status=status.HTTP_400_BAD_REQUEST)

            # Verify password
            if bcrypt.checkpw(password.encode(), doctor_login.password.encode()):
                return Response({"success": "Login successful"}, status=status.HTTP_200_OK)
            return Response({"error": "Invalid email or password"}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PatientSummaryView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = PatientIntakeSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        client = pymongo.MongoClient("mongodb://localhost:27017/")
        db = client["careLink"]
        collection = db["patient_summary"]

        os.environ['GOOGLE_API_KEY'] = "AIzaSyBkPISXDN_Opr1wxwpRiuXQVs7IBIASoRs"
        genai.configure(api_key="AIzaSyBkPISXDN_Opr1wxwpRiuXQVs7IBIASoRs")
        model = genai.GenerativeModel('gemini-1.5-pro')

        prompt = self.construct_prompt(serializer.validated_data) #prompt generation is abstracted

        response = model.generate_content(prompt)
        markdown_text = response.text
        
        try:
            clean_data = markdown_text.strip().strip('```json').strip('```')
            ai_summary = json.loads(clean_data)
            ai_summary['basic_information'] = serializer.validated_data['basic_information']
            ai_summary['created_at'] = datetime.now(timezone.utc).isoformat()
            
            result = collection.insert_one(ai_summary)
            ai_summary['_id'] = str(result.inserted_id)

            return Response(ai_summary, status=status.HTTP_201_CREATED)
        
        except json.JSONDecodeError:
            return Response({"error": "Malformed AI response"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def construct_prompt(self, data):
        """Constructs the prompt for the AI model based on input data."""
        prompt = (
            f"Patient Information:\n{data['basic_information']}\n\n"
            f"Symptoms:\n{data['symptoms']}\n\n"
            f"Lifestyle:\n{data['lifestyle']}\n\n"
            f"Health History:\n{data['health_history']}\n\n"
            f"Additional Notes:\n{data['additional_notes']}\n\n"
            "Generate a summary in the following JSON format:\n\n"
            "{"
            '"predicted_diagnosis": {'
            '"primary_prediction": "Predicted Disease 1", '
            '"secondary_prediction": "Predicted Disease 2", '
            '"alternative_considerations": ["Other possible issues"]'
            '},'
            '"suggested_remedies": {'
            '"lifestyle_modifications": ["e.g., dietary changes"], '
            '"medication_suggestions": ["General drug classes"], '
            '"followup_tests": ["Blood test", "Imaging"]'
            '},'
            '"additional_notes": {'
            '"relevant_alerts": ["Any critical points"], '
            '"patient_concerns": "Patient-entered notes"'
            '}'
            "}\n\n"
            "Please generate predictions and recommendations based on the patient data provided in valid json format."
        )
        return prompt
    
class PatientSummaryListView(APIView):
    def get(self, request, *args, **kwargs):
        doctor_id = request.query_params.get("doctor_id")
        if not doctor_id:
            return Response({"error": "Doctor ID is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            client = pymongo.MongoClient("mongodb://localhost:27017/")
            db = client["careLink"]
            collection = db["patient_summary"]
            
            summaries = list(collection.find({"basic_information.doctor_id": int(doctor_id)}))

            # Convert ObjectId to string and format the response
            for summary in summaries:
                summary["_id"] = str(summary["_id"])
            
            return Response(summaries, status=status.HTTP_200_OK)
        
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)