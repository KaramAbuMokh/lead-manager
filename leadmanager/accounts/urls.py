from django.urls import path, include
from django.urls.resolvers import URLPattern
from .api import RegisterAPI, LoginAPI, UserAPI, AllUsersAPI
from knox import views as knox_views
from rest_framework import routers


urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('api/auth/allUsers', AllUsersAPI.as_view({'get': 'list'})),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
]
