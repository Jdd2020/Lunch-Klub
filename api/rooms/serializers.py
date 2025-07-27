from rest_framework import serializers
from rooms.models import Room

class RoomSerializer(serializers.ModelSerializer):
    code = serializers.CharField(required=False)
    class Meta:
        model = Room
        fields = [
            'id',
            'name',
            'description',
            'user',
            'code',
            'max_players',
            'is_active',
            'created_at',
            'updated_at'
        ]
