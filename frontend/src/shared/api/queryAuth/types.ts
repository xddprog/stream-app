export interface IRegisterRequest {
  username: string
  password: string
  email: string
}

export interface ILoginRequest {
  email: string
  password: string
}

export interface ILoginResponse {
  detail: string
  user: {
    id: number
    username: string
    email: string
  }
  token: string
}

export interface IRegisterResponse {
  detail: string
  new_user: {
    id: number
    username: string
    email: string
  }
  token: string
}
