from django.contrib import admin
from django import forms
from .models import Hospital, Doctor, Appointment


admin.site.register(Hospital)
admin.site.register(Doctor)
admin.site.register(Appointment)



