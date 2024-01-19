from rest_framework import serializers
from .models import User, Data
from datetime import date, timedelta


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class DataSerializer(serializers.ModelSerializer):
    date = serializers.DateField(input_formats=['%d/%m/%Y'], required=False)

    class Meta:
        model = Data
        fields = ['date', 'value']

    def create(self, validated_data):
        if 'date' not in validated_data:
            latest_data = Data.objects.latest('date') if Data.objects.exists() else None
            validated_data['date'] = latest_data.date + timedelta(days=1) if latest_data else date(2024, 1, 1)
        return super().create(validated_data)
