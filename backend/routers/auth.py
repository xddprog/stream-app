from typing import Annotated
from fastapi import APIRouter, Depends, Response

from backend.dto.auth_dto import (
    LoginForm,
    LoginResponse,
    RegisterForm,
    RegisterResponse,
)
from backend.dto.user_dto import BaseUserModel
from backend.services import AuthService
from backend.utils.dependencies import (
    get_auth_service,
    get_current_user_dependency,
)


router = APIRouter(prefix="/api/auth", tags=["auth"])


@router.get("/current_user")
async def get_current_user(
    current_user: BaseUserModel = Depends(get_current_user_dependency),
) -> BaseUserModel:
    return current_user


@router.post("/login", status_code=200)
async def login_user(
    form: LoginForm,
    auth_service: Annotated[AuthService, Depends(get_auth_service)],
) -> LoginResponse:
    user = await auth_service.authenticate_user(form)
    token = await auth_service.create_access_token(form.email)
    return LoginResponse(
        detail="Вы успешно вошли в аккаунт!", user=user, token=token
    )


@router.delete("/logout")
async def logout_user(response: Response) -> dict[str, str]:
    response.delete_cookie(key="token")
    return {"detail": "Вы успешно вышли из аккаунта"}


@router.post("/register", status_code=201)
async def register_user(
    form: RegisterForm,
    auth_service: Annotated[AuthService, Depends(get_auth_service)],
) -> RegisterResponse:
    new_user = await auth_service.register_user(form)
    token = await auth_service.create_access_token(form.email)
    return RegisterResponse(
        detail="Вы успешно зарегистрировались!", 
        new_user=new_user, 
        token=token
    )
