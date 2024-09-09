from rest_framework.response import Response
from rest_framework.decorators import api_view

from api.serializers import UserSerializer



@api_view(['GET'])
def index(request):
    message = "we made it"
    return Response({'message': message})


@api_view(['POST'])
def create_blog(request):
    """
        This is where a user is able to create a new blog post taking in the arguments of title and body
        {
            "title": "title",
            "body":"body"
        }
    """
    
    return Response("create blog")


# going to learn how to add pagination so it can make it easier for client to render out a certain amount and not have an overload of lagging
@api_view(['GET'])
def get_all_blogs(request):
    """
        This is a Get request where the client is able to retrieve all of the blog objects that are created by the clients
    """
    return Response("get all blogs")


@api_view(['GET'])
def get_single_blog(request):
    """
        This is a Get request where the client is able to retrieve a single blog post 
    """
    return Response("get all blogs")


@api_view(['PATCH'])
def patch_blog(request):
    """
        This is a patch request where the client is able to update a single blogs information
    """
    return Response("get all blogs")


@api_view(['DELETE'])
def delete_blog(request):
    """
        This is a delete request where the client is able to delete a single blogs information from the database
    """
    return Response("blog has been deleted")