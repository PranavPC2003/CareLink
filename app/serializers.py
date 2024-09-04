from rest_framework import serializers, exceptions
from .models import Hospital, Doctor, Appointment

class HospitalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hospital
        fields = ['hospital_id', 'name', 'description','location', 'category', 'logo'] 

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ['doctor', 'date', 'timeslot', 'patient_name'] 