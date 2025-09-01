from django.contrib.auth.backends import BaseBackend
from django.contrib.auth import get_user_model
from django.db.models import Q

User = get_user_model()

class EmailBackend(BaseBackend):
    """
    Custom authentication backend that allows users to log in using their email.
    This works for both regular users and admin users.
    """
    
    def authenticate(self, request, email=None, password=None, **kwargs):
        if email is None or password is None:
            return None
        
        try:
            # Try to find user by email
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return None
        
        # Check password
        if user.check_password(password):
            return user
        
        return None
    
    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None
