from django.db import models

# Create your models here.
class Username(models.Model):
    username=models.CharField(max_length=50)
    password=models.CharField(max_length=50)
    first_name=models.CharField(max_length=20)
    last_name=models.CharField(max_length=20)
    date=models.DateTimeField(auto_now_add=True)
    email=models.CharField(max_length=50)
