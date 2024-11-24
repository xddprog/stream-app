import { AxiosResponse } from "axios"
import { axiosWithAuth } from "../baseQuery"
import { IUserResponse } from "./types"

export const userMethods = {
  getUser: (url: string): Promise<AxiosResponse<IUserResponse>> => axiosWithAuth.get(url)
}
