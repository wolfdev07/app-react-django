from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from users import Api

urlpatterns = [
    path('register/', Api.register),
    path('login/', Api.MyTokenObtainPairSerializer.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
]