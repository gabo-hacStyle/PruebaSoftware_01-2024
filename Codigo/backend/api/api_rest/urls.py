from django.urls import path
from .views import (UserDetailApiView, UserListApiView, LoginView)

urlpatterns = [
    path('users/<int:pk>/', UserDetailApiView.as_view(), name='user-detail'),
    path('users/', UserListApiView.as_view(), name='user-list'),
    path ('login/', LoginView.as_view(), name='login'),
    
]