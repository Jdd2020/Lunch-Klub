from rest_framework import viewsets, permissions
from rooms.models import Room
from rooms.serializers import RoomSerializer
from rest_framework.response import Response

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
    
    def create(self, request, *args, **kwargs):
        """
        Override create to associate the room with the authenticated user.
        """
        if not request.user.is_authenticated:
            return Response({'detail': 'Authentication credentials were not provided.'}, status=401)
        
        # Add the user to the request data
        request.data['user'] = request.user.id
        return super().create(request, *args, **kwargs)
