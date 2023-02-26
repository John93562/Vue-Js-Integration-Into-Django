from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import post
from .serializer import PostSerializer
# Create your views here.
@api_view(['GET'])
def getData(request,title=""):
    if not title:
        posts = post.objects.all()
        serializer = PostSerializer(posts, many=True)
    else:
        posts = post.objects.all().filter(slug_title=title)
        if not posts:
            return Response()
        else:
            serializer = PostSerializer(posts[0], many=False)

    return Response(serializer.data)


