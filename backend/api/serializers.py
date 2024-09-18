from rest_framework.serializers import ModelSerializer, ValidationError
from blog.models import Blog


class UserSerializer(ModelSerializer):
    pass



class BlogSerializer(ModelSerializer):
    class Meta:
        model= Blog
        fields = '__all__'
        validators = []

    def validate_title(self, value):
        pass
    def validate_body(self, value):
        pass