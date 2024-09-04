from django.urls import path
from .views import blogs, users

urlpatterns = [
    path('', blogs.index),
    path('yep/', users.index),
]