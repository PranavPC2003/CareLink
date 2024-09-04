# Generated by Django 5.1 on 2024-09-04 18:05

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_alter_appointment_status'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('age', models.IntegerField()),
                ('dob', models.DateField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Prescription',
            fields=[
                ('presciption_id', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('doctor', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='app.doctor')),
                ('patient', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='app.patient')),
            ],
        ),
    ]