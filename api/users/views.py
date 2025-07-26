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
            print(f"User {user.email} logged in successfully.")
            return Response({"message": "Logged in successfully."}, status=status.HTTP_200_OK)
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
        user = request.user
        print(f"User: {user}")
        if user is not None and user.is_authenticated:
            serializer = self.serializer_class(user)
            return Response(serializer.data)
        return Response({"message": "User is not authenticated."}, status=status.HTTP_401_UNAUTHORIZED)
