from uuid import uuid4
from pydantic import UUID4


from backend.dto.user_dto import BaseUserModel
from backend.repositories import UserRepository
from backend.services import BaseService


class UserService(BaseService):
    repository: UserRepository
