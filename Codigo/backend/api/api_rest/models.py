from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import BaseUserManager
from django.db import models
import random
from datetime import date, timedelta
from django.core.validators import MinValueValidator, MaxValueValidator

class MyUserManager(BaseUserManager):

    def get_by_natural_key(self, username):
        return self.get(username=username)

class User(AbstractBaseUser):
    email = models.EmailField(verbose_name='email address', max_length=255, unique=True, null=True)
    username = models.CharField(max_length=30, unique=True, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email
    
    objects = MyUserManager()


class Data(models.Model):
    date = models.DateField()
    value = models.DecimalField(max_digits=4, decimal_places=1, validators=[MinValueValidator(24.0), MaxValueValidator(29.91)])

    def save(self, *args, **kwargs):
        if not self.id:
            self.date = Data.objects.latest('date').date + timedelta(days=1) if Data.objects.exists() else date(2024, 1, 1)
            self.value = round(random.uniform(24.0, 29.9), 1)
        super().save(*args, **kwargs)

