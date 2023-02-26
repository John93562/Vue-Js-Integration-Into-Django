from rest_framework import serializers
from .models import post

class PostSerializer(serializers.ModelSerializer):
 class Meta:
  model=post
  fields=('title','description','short_description','imagePath','slug_title')