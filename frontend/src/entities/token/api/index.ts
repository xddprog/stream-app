import { authMethods } from "@shared/api/queryAuth"
import { ILoginRequest, IRegisterRequest, IRegisterResponse } from "@shared/api/queryAuth/types"
import axios from "axios"
import { TokenService } from "../libs"

export const registration = async (requestData: IRegisterRequest) => {
  try {
    const { data, status } = await authMethods.register("api/auth/register", requestData)
    TokenService.setAccessToken(data.token)
    return {
      data,
      status
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return {
        message: err.response?.data.message,
        status: err.response?.status ?? 500,
        data: {} as IRegisterResponse
      }
    } else {
      return {
        message: "Что то пошло не так",
        status: 500,
        data: {} as IRegisterResponse
      }
    }
  }
}

export const login = async (requestData: ILoginRequest) => {
  try {
    const { data, status } = await authMethods.login("api/auth/login", requestData)
    TokenService.setAccessToken(data.token)
    return {
      data,
      status
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return {
        message: err.response?.data.message,
        status: err.response?.status ?? 500,
        data: {} as IRegisterResponse
      }
    } else {
      return {
        message: "Что то пошло не так",
        status: 500,
        data: {} as IRegisterResponse
      }
    }
  }
}
