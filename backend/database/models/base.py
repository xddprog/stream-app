from datetime import datetime
from tortoise import Tortoise, fields, models, run_async


class Base:
    id: int = fields.IntField(primary_key=True, generated=True)
    created_at: datetime = fields.DatetimeField(auto_now_add=True)
    updated_at: datetime = fields.DatetimeField(auto_now=True)
