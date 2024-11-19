from tortoise import fields, models
from backend.database.models.base import Base


class User(Base, models.Model):
    username: str = fields.TextField()
    email: str = fields.TextField()
    password: str = fields.TextField()

    class Meta:
        table = "users"