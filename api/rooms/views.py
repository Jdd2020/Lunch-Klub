from django.shortcuts import render
from rest_framework import viewsets, permissions
from rooms.models import Room
from rooms.serializers import RoomSerializer

# Create your views here.

class RoomViewSet(viewsets.ModelViewSet):
    """
    ViewSet for managing rooms. Requires authentication for create/update/delete.
    """
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    
    def get_permissions(self):
        """
        Instantiates and returns the list of permissions that this view requires.
        """
        if self.action in ['list', 'retrieve']:
            # Allow anyone to view rooms
            permission_classes = [permissions.AllowAny]
        else:
            # Require authentication for create/update/delete
            permission_classes = [permissions.IsAuthenticated]
        
        return [permission() for permission in permission_classes]
    
    def perform_create(self, serializer):
        """
        Automatically set the user when creating a room
        """
        serializer.save(user=self.request.user)

