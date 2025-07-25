"""
URL configuration for api project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from rest_framework import routers
from users import views as auth_views
from django.urls import include
from rooms import views as room_views

api_router = routers.DefaultRouter()
api_router.register(r'auth', auth_views.Auth, basename='auth')
api_router.register(r'rooms', room_views.RoomViewSet, basename='rooms')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(api_router.urls)),
    path('api/login/', auth_views.LoginView.as_view(), name='login'),
    path('api/logout/', auth_views.LogoutView.as_view(), name='logout'),

]
