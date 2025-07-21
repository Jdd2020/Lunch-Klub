from rest_framework import viewsets
from users.serializers import UserSerializer
from django.contrib.auth import get_user_model
from rest_framework.response import Response

User = get_user_model()

# Create your views here.
class Auth(viewsets.ViewSet):
    serializer_class = UserSerializer

    def list(self, request):
        users = User.objects.all()
        serializer = self.serializer_class(users, many=True)
        return Response(serializer.data)