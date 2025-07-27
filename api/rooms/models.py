from django.db import models
from users.models import BaseModel
from uuid import uuid4

class Room(BaseModel):
    name = models.CharField(max_length=255, unique=True)
    code = models.CharField(max_length=6, unique=True)
    description = models.TextField(blank=True, null=True)
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, related_name='created_rooms')
    max_players = models.PositiveIntegerField(default=8)
    is_active = models.BooleanField(default=True)

    def save(self, *args, **kwargs):
        if self.code:
            return ValueError("Code must be unique and auto-generated.")
        
        self.code = uuid4().hex[:6].upper()  # Generate a unique code
        super().save(*args, **kwargs)


    def __str__(self):
        return self.name

