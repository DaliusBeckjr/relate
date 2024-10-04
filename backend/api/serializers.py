from rest_framework.serializers import ModelSerializer
from blog.models import Blog
from user.models import User


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class BlogSerializer(ModelSerializer):
    class Meta:
        model= Blog
        fields = ['id','title', 'body', 'created_at', 'updated_at']
        # validators = []

    # def validate_title(self, value):
        
    # def validate_body(self, value):
    #     pass