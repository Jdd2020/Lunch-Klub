from rest_framework import viewsets, permissions, status
from rest_framework.views import APIView
from users.serializers import UserSerializer
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout

User = get_user_model()

class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        if email is None: 
            return Response({"message": "Email is required."}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(request, email=email, password=password)

        if user is not None:
            login(request, user)
            return Response({"message": "Logged in successfully."})
        return Response({"message": "Invalid email or password."}, status=status.HTTP_400_BAD_REQUEST)
    
class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        logout(request)
        return Response({"message": "Logged out successfully."})

# Create your views here.
class Auth(viewsets.ViewSet):
    serializer_class = UserSerializer

    def list(self, request):
        print(request.user)
        users = User.objects.all()
        serializer = self.serializer_class(users, many=True)
        return Response(serializer.data)
