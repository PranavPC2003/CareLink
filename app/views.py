from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from .serializers import HospitalSerializer, AppointmentSerializer
from .models import Hospital, Doctor, Appointment

# Create your views here.
class HospitalListView(generics.ListCreateAPIView):
    queryset = Hospital.objects.all()
    serializer_class = HospitalSerializer

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