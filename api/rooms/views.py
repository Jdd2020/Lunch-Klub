from django.shortcuts import render
from rest_framework import viewsets
from rooms.models import Room
from rooms.serializers import RoomSerializer

# Create your views here.

class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

