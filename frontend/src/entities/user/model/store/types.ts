import { IUserResponse } from "@/shared/api/queryUser/types"

export interface IUserState {
  isLoading: boolean
  user: IUserResponse | null
  error: string
}
