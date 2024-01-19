from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import BaseUserManager
from django.db import models
import random
from datetime import date, timedelta

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

