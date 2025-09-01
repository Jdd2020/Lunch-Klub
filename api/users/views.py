from rest_framework import permissions, status, viewsets
from rest_framework.views import APIView
from users.serializers import UserSerializer
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import action



User = get_user_model()

class LoginView(APIView):
    """
    Login endpoint that works for both regular users and admin users
    """
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
            
            # Return user info along with success message
            serializer = UserSerializer(user)
            return Response({
                "message": "Logged in successfully.",
                "user": serializer.data
            }, status=status.HTTP_200_OK)
        return Response({"message": "Invalid email or password."}, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    """
    Logout endpoint for authenticated users
    """
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        logout(request)
        return Response({"message": "Logged out successfully."})

class Auth(viewsets.ViewSet):
    """
    Authentication viewset for managing user authentication state
    """
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer

    def list(self, request):
        """
        Get current authenticated user info
        """
        user = request.user
        serializer = self.serializer_class(user)
        return Response(serializer.data)

    @action(detail=False, methods=['get'], permission_classes=[permissions.AllowAny])
    def status(self, request):
        """
        Check authentication status (public endpoint)
        """
        if request.user.is_authenticated:
            serializer = self.serializer_class(request.user)
            return Response({
                "authenticated": True,
                "user": serializer.data
            })
        return Response({"authenticated": False})

    @action(detail=False, methods=['get'], permission_classes=[permissions.AllowAny])
    def debug(self, request):
        """
        Debug endpoint to check session and authentication
        """
        return Response({
            "authenticated": request.user.is_authenticated,
            "user_id": getattr(request.user, 'id', None),
            "user_email": getattr(request.user, 'email', None),
            "session_key": request.session.session_key,
            "session_data": dict(request.session) if hasattr(request.session, 'items') else None,
        })