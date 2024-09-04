from rest_framework.response import Response
from rest_framework.decorators import api_view




@api_view(['GET'])
def index(request):
    message = "this is for users"
    return Response({'message': message})