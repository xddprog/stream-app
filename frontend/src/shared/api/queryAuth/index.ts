import { AxiosResponse } from "axios"
import { axiosForAuth } from "../baseQuery"
import { ILoginRequest, ILoginResponse, IRegisterRequest, IRegisterResponse } from "./types"

export const authMethods = {
  login: (url: string, body: ILoginRequest): Promise<AxiosResponse<ILoginResponse>> =>
    axiosForAuth.post(url, body),
  register: (url: string, body: IRegisterRequest): Promise<AxiosResponse<IRegisterResponse>> =>
    axiosForAuth.post(url, body)
}
