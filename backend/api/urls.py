from django.urls import path
from .views import blogs, users

urlpatterns = [
    path('blogs/all', blogs.index),
    path('blogs/create', blogs.create_blog),
    path('user/login', users.index),
    path('user/signup', users.index),
]