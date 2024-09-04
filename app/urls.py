from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path("hospital-view/", views.HospitalListView.as_view(), name="hospital-view"),
    path('book-appointment/', views.AppointmentBooking.as_view(), name='appointment-booking'),
]
