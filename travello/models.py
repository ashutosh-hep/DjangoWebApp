from django.db import models

# Create your models here.


class Dest(models.Model):
    user_name = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
