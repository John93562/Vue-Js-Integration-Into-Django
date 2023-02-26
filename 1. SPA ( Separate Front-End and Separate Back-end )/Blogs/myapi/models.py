from django.db import models
from rest_framework import serializers
# Create your models here.
class post(models.Model):
 title = models.CharField(max_length=200)
 description = models.CharField(max_length=5000)
 short_description = models.CharField(max_length=100,null=True)
 imagePath = models.CharField(max_length=500,null=True)
 slug_title = models.SlugField(max_length=50,null=True)