from django.db import models
from users.models import BaseModel

class Room(BaseModel):
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField(blank=True, null=True)
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, related_name='created_rooms')
    max_players = models.PositiveIntegerField(default=8)


    def __str__(self):
        return self.name

