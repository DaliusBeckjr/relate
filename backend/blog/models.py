from django.db import models
from user.models import User


class Blog(models.Model):
    title = models.CharField(max_length=255, null=False)
    body = models.TextField(null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title}"