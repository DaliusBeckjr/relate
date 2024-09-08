from rest_framework.response import Response
from rest_framework.decorators import api_view

from api.serializers import UserSerializer



@api_view(['GET'])
def index(request):
    message = "we made it"
    return Response({'message': message})