from pydantic import BaseModel, BeforeValidator, Field
from datetime import datetime
from typing import Annotated, Optional
from bson import ObjectId
import json
import uuid


PyObjectId = Annotated[str, BeforeValidator(str)]

class Category(BaseModel):
    id: str = Field(default_factory= uuid.uuid4, alias="_id")
    # id: Optional[PyObjectId] = Field(alias="_id", default=None)
    title: str

class Blog(BaseModel):
    # id: Optional[PyObjectId] = Field(alias="_id", default=None)
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    title : str
    content : str
    created_at : datetime = datetime.now()
    category: Category
