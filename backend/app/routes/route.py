from fastapi import APIRouter
from fastapi.encoders import jsonable_encoder
from requests import Request
from ..models.blogs import Blog

router = APIRouter()


@router.post("/")
async def create_blog(request: Request, blog: Blog) :
    blog = jsonable_encoder(blog)