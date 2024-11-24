from django.db import models
from datetime import datetime
from django.contrib.auth.models import User
from ckeditor_uploader.fields import RichTextUploadingField
import bcrypt


class Patient(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    first_name = models.CharField(max_length = 30)
    last_name = models.CharField(max_length = 30)
    age = models.IntegerField()
    dob = models.DateField()

class Hospital(models.Model):
    hospital_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=600, blank=True, null=True)
    location = models.TextField(max_length=300)
    category = models.CharField(max_length=50)
    logo = models.ImageField(upload_to='hospital_logo/', blank=True, null=True, default='https://w7.pngwing.com/pngs/877/824/png-transparent-icon-hospital-computer-icons-medicine-others-miscellaneous-text-rectangle.png')

    def __str__(self):
        return f"{self.hospital_id}: {self.name}"

class Doctor(models.Model):
    doctor_id = models.IntegerField(primary_key=True)
    hospital_id = models.ForeignKey(Hospital, on_delete=models.RESTRICT)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30, blank=True, null=True)
    middle_name = models.CharField(max_length=30, blank=True, null=True)
    specialty = models.CharField(max_length=30)

    def __str__(self):
        return '{} {}'.format(self.specialty, self.short_name)

    @property
    def short_name(self):
        if self.middle_name:
            middle_initial = f"{self.middle_name[0].upper()}."
            return '{} {}.{}'.format(self.last_name.title(), self.first_name[0].upper(), middle_initial)
        else:
            return '{} {}.'.format(self.last_name.title(), self.first_name[0].upper())
        
class DoctorLogin(models.Model):
    doctor = models.OneToOneField(Doctor, on_delete=models.CASCADE)
    email = models.EmailField(max_length=100, unique=True)
    password = models.CharField(max_length=60)

    def __str__(self):
        return '{} {}'.format(self.doctor.doctor_id, self.email)
        
class Appointment(models.Model):
    class Meta:
        unique_together = ('doctor', 'date', 'timeslot')

    TIMESLOT_LIST = (
        (0, '08:30 - 09:00'),
        (1, '09:00 - 09:30'),
        (2, '10:00 - 10:30'),
        (3, '11:00 - 11:30'),
        (4, '12:00 - 12:30'),
        (5, '13:00 - 13:30'),
        (6, '14:00 - 14:30'),
        (7, '15:00 - 15:30'),
        (8, '16:00 - 16:30'),
        (9, '17:00 - 17:30'),
        (10, '17:30 - 18:00'),
    )

    doctor = models.ForeignKey(Doctor, on_delete = models.CASCADE)
    date = models.DateField(help_text="DD-MM-YYYY")
    timeslot = models.IntegerField(choices=TIMESLOT_LIST)
    patient_name = models.CharField(max_length=60)
    status = models.IntegerField(default=0)
    booked_status = models.IntegerField(default=0)

    def __str__(self):
        return '{} {} {}. Patient: {}'.format(self.date, self.time, self.doctor, self.patient_name)

    @property
    def time(self):
        return self.TIMESLOT_LIST[self.timeslot][1]
    
class Prescription(models.Model):
    presciption_id = models.CharField(primary_key=True, max_length=50)
    doctor = models.ForeignKey(Doctor, on_delete = models.SET_NULL, null=True)
    patient = models.ForeignKey(Patient, on_delete = models.SET_NULL, null=True)
    patient_weight = models.IntegerField(default=65, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    clinic = models.TextField(max_length=300, default=" ", blank=True)
    drug_details = RichTextUploadingField(default=" ", blank=True)
    directions_for_use = models.TextField(max_length=300, default=" ", blank=True)
    
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        patient_dob = self.patient.dob
        patient_first_name = self.patient.first_name
        patient_last_name = self.patient.last_name
        patient_age = self.patient.age
        super().save(*args, **kwargs)
    
