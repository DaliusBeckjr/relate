from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from rest_framework_simplejwt.tokens import RefreshToken
from api.serializers import UserSerializer
from user.models import User
from django.contrib.auth import authenticate



# helper function to get the tokens for the user
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    
    return {
        
        'access': str(refresh.access_token),
        'refresh': str(refresh),
    }


@api_view(['POST'])
def sign_up(request):
    """
    Handles User signup using the username, email and password to create a new user and return an access and refresh token fot the authenticated user
    {
        "username": "username",
        "email": "email",
        "password": "password"
    }
    """
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')
    
    if User.objects.filter(email=email).exists():
        return Response({'error': 'Email already exists'}, status = status.HTTP_400_BAD_REQUEST)

    # for email to be accepted, need to create a custom email backend
    data = {'username': username, 'email': email, 'password': password}
    
    serializer = UserSerializer(data=data)
    if serializer.is_valid():
        user = User.objects.create_user(**serializer.validated_data)
        tokens = get_tokens_for_user(user)
        user_data = user.email
        return Response({'user': user_data, 'tokens': tokens}, status = status.HTTP_200_OK)
    # else:
    return Response({'error':serializer.errors}, status = status.HTTP_400_BAD_REQUEST)



@api_view(['POST'])
def login(request):
    """
    Handles User login using the email and password to return an access and refresh token fot the authenticated user
    
    {
        "email": "email",
        "password": "password"
    }
    """
    email = request.data.get('email')
    password = request.data.get('password')
    
    user = authenticate(username=email, password=password)
    if user:
        tokens = get_tokens_for_user(user)
        user_data = user.email
        return Response({'user': user_data, 'tokens': tokens}, status.HTTP_200_OK)
    # else:
    return Response({'error': 'Invalid Credentials'}, status.HTTP_400_BAD_REQUEST)