from pydantic import BaseModel


class BaseUserModel(BaseModel):
    id: int
    username: str
    email: str