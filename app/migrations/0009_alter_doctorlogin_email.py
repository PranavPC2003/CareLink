# Generated by Django 5.1.1 on 2024-11-13 12:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_doctorlogin'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctorlogin',
            name='email',
            field=models.EmailField(max_length=100, unique=True),
        ),
    ]