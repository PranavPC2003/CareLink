from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path("hospital-view/", views.HospitalListView.as_view(), name="hospital-view"),
    path('book-appointment/', views.AppointmentBooking.as_view(), name='appointment-booking'),
    path('patient-summary/', views.PatientSummaryView.as_view(), name='patient-summary'),
    path('doctor/signup/', views.DoctorSignupView.as_view(), name='doctor-signup'),
    path('doctor/login/', views.DoctorLoginView.as_view(), name='doctor-login'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)