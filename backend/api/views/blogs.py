from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK, HTTP_201_CREATED, HTTP_404_NOT_FOUND, HTTP_204_NO_CONTENT

from api.serializers import BlogSerializer
from blog.models import Blog


@api_view(['POST'])
def create_blog(request):
    """
        This is where a user is able to create a new blog post taking in the arguments of title and body
        {
            "title": "title",
            "body":"body"
        }
    """
    title = request.data.get('title')
    body = request.data.get('body')
    
    empty_fields = []
    if not title:
        empty_fields.append('title')
    if not body:
        empty_fields.append('body')

    if empty_fields:
        return Response({'error': "please fill in all fields", "empty_fields": empty_fields}, status=HTTP_400_BAD_REQUEST)

    data = {'title': title, 'body': body}
    serializer = BlogSerializer(data=data)
    
    if not serializer.is_valid():
        error_list = []
        for messages in serializer.errors.values():
            error_list.extend(messages)
        error_messages = "".join(error_list)
        return Response({'error': error_messages}, status=HTTP_400_BAD_REQUEST)
    
    serializer.save()
    return Response(serializer.data, status=HTTP_201_CREATED)


# going to learn how to add pagination so it can make it easier for client to render out a certain amount and not have an overload of lagging
@api_view(['GET'])
def get_all_blogs(request):
    """
        This is a Get request where the client is able to retrieve all of the blog objects that are created by the clients
    """
    blog = Blog.objects.order_by('-created_at')
    serializer = BlogSerializer(blog, many=True)
    return Response(serializer.data, status=HTTP_200_OK)


@api_view(['GET'])
def get_single_blog(request, pk):
    """
        This is a Get request where the client is able to retrieve a single blog post 
    """
    try:
        blog = Blog.objects.get(id = pk)
    except Blog.DoesNotExist:
        return Response({'error': 'blog not found'}, status=HTTP_404_NOT_FOUND)
    serializer = BlogSerializer(blog, many=False)
    return Response(serializer.data, status=HTTP_200_OK)


@api_view(['PATCH'])
def patch_blog(request, pk):
    """
        This is a patch request where the client is able to update a single blogs information
    """
    blog = Blog.objects.get(id = pk)
    serializer = BlogSerializer(instance= blog, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=HTTP_200_OK)
    return Response({'error': serializer.errors}, status=HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete_blog(request, pk):
    """
        This is a delete request where the client is able to delete a single blogs information from the database
    """
    try:
        blog = Blog.objects.get(id = pk)
    except Blog.DoesNotExist:
        return Response({'error': 'Blog not found'}, status=HTTP_400_BAD_REQUEST)
    blog.delete()
    return Response({'id': pk, 'message': 'Blog successfully deleted'}, status=HTTP_204_NO_CONTENT)