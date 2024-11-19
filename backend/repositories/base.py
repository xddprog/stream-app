from abc import ABC, abstractmethod
from typing import Any

from pydantic import UUID4
from tortoise import models
from tortoise.fields import Field


class BaseRepository[ModelType](ABC):
    @abstractmethod
    async def get_item(self, item_id: int) -> ModelType | None:
        raise NotImplementedError

    @abstractmethod
    async def get_all_items(self) -> list[ModelType] | None:
        raise NotImplementedError

    @abstractmethod
    async def get_by_attribute(
        self, attribute: Field[Any], value: int
    ) -> list[ModelType] | None:
        raise NotImplementedError

    @abstractmethod
    async def add_item(self, **kwargs: int) -> ModelType:
        raise NotImplementedError

    @abstractmethod
    async def delete_item(self, item: ModelType) -> None:
        raise NotImplementedError

    @abstractmethod
    async def update_item(
        self, item_id: int | str, **update_values: str | int | UUID4
    ) -> ModelType:
        raise NotImplementedError


class SqlAlchemyRepository[ModelType](BaseRepository):
    model: models.Model = None
    
    async def get_item(self, item_id: int | UUID4 | str) -> ModelType | None:
        return await self.model.get_or_none(id=item_id)

    async def get_all_items(self) -> list[ModelType]:
        return await self.model.all()

    async def get_by_attribute(
        self, attribute: Field[Any], value: str | UUID4 | int
    ) -> list[ModelType] | None:
        return await self.model.filter(**{attribute: value}).all()

    async def add_item(self, **kwargs: int | str | UUID4) -> ModelType:
        return await self.model.create(**kwargs)

    async def delete_item(self, item: ModelType) -> None:
        await self.model.filter(id=item.id).delete()

    async def update_item(
        self, item_id: int | str | UUID4, **update_values
    ) -> ModelType:
       await self.model.filter(id=item_id).update(**update_values)
       return await self.model.get(id=item_id)
