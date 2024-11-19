from typing import Annotated, AsyncGenerator

from fastapi import Depends, Request
from fastapi.security import HTTPBearer
from aiobotocore.session import AioSession

import backend.services as services
import backend.repositories as repositories
from backend.utils.redis_cache import RedisCache
from backend.dto.user_dto import BaseUserModel
from backend.services import AuthService
from backend.utils.config.config import load_s3_storage_config
from backend.utils.s3_client import S3Client


bearer = HTTPBearer(auto_error=False)


async def get_redis(request: Request) -> RedisCache:
    return request.app.state.redis_cache


async def get_s3_client():
    config = load_s3_storage_config()
    session = AioSession()
    async with session.create_client(
        "s3",
        aws_access_key_id=config.access_key_id,
        aws_secret_access_key=config.secret_access_key,
        endpoint_url=config.endpoint_url,
        region_name=config.region,
    ) as client:
        yield S3Client(
            client=client,
            bucket_name=config.bucket_name,
            endpoint_url=config.endpoint_url,
        )


async def get_auth_service(
    # s3_client=Depends(get_s3_client)
):
    return services.AuthService(
        repository=repositories.UserRepository(),
        # s3_client=s3_client,
    )


async def get_current_user_dependency(
    token: Annotated[HTTPBearer, Depends(bearer)],
    auth_service: Annotated[AuthService, Depends(get_auth_service)],
):
    email = await auth_service.verify_token(token)
    return await auth_service.check_user_exist(email)
