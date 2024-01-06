from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import make_password

from users.models import User
from users.serializers import MyTokenObtainPairSerializer,  MyUserSerializer


class MyTokenObtainPairSerializer(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['POST'])
def register(request):
    data = request.data

    user = User.objects.create(
        username=data['username'],
        email=data['email'],
        password=make_password(data['password']),
    )

    serializer = MyUserSerializer(user, many=False)
    
    return Response(serializer.data)