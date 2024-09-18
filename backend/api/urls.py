from django.urls import path
from .views import blogs, users

urlpatterns = [
    path('blogs/', blogs.get_all_blogs),
    path('blogs/single/<str:pk>', blogs.get_single_blog),
    path('blogs/create', blogs.create_blog),
    path('blogs/update/<str:pk>', blogs.patch_blog),
    path('blogs/delete/<str:pk>', blogs.delete_blog),
    path('user/login', users.index),
    path('user/signup', users.index),
]