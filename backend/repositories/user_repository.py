from backend.repositories.base import SqlAlchemyRepository
from backend.database.models.user import User


class UserRepository(SqlAlchemyRepository):
    model = User