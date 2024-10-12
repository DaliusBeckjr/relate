from rest_framework.serializers import ModelSerializer, ValidationError
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
        validators = []

    def validate_title(self, value):
        """ 
        validates the title of the blog
        """
        if len(value) < 5: 
            raise ValidationError('Title must be at least 5 characters long')
    def validate_body(self, value):
        """ 
        validates the body of the blog
        """
        if len(value) < 10:
            raise ValidationError('Body must be at least 10 characters long')