from rest_framework import serializers, exceptions
from .models import Hospital, Doctor, Appointment, DoctorLogin
import bcrypt

class HospitalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hospital
        fields = ['hospital_id', 'name', 'description','location', 'category', 'logo', 'latitude', 'longitude'] 

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ['doctor', 'date', 'timeslot', 'patient_name']
class DoctorSignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = DoctorLogin
        fields = ['doctor', 'email', 'password']

    def create(self, validated_data):
        doctor = validated_data['doctor']
        email = validated_data['email']
        password = validated_data['password']

        hashed_password = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
        
        # Save and return the new DoctorLogin instance
        return DoctorLogin.objects.create(
            doctor=doctor,
            email=email,
            password=hashed_password
        )

class DoctorLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True) 
    
class PatientIntakeSerializer(serializers.Serializer):
    basic_information = serializers.DictField()
    symptoms = serializers.DictField()
    lifestyle = serializers.DictField()
    health_history = serializers.DictField()
    additional_notes = serializers.DictField()