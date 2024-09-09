from rest_framework.serializers import ModelSerializer
from blog.models import Blog


class UserSerializer(ModelSerializer):
    pass



class BlogSerializer(ModelSerializer):
    class meta:
        model= Blog
        fields = ['id', 'title', 'body', 'created_at', ]
        validators = []

    def validate_title(self, value):
        ...
    def validate_body(self, value):
        ...