import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit"
import { IUserState } from "./types"
import { IUserResponse } from "@shared/api/queryUser/types"
import { userMethods } from "@shared/api/queryUser"

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator }
})

export const initialState: IUserState = {
  user: null,
  isLoading: false,
  error: ""
}

export const userSlice = createSliceWithThunks({
  name: "user-slice",
  initialState,
  reducers: create => ({
    getCurrentUser: create.asyncThunk<IUserResponse, void, { rejectValue: string }>(
      async (_, { rejectWithValue }) => {
        try {
          const { data, status } = await userMethods.getUser("/api/auth/current_user")
          if (status !== 200) return rejectWithValue("Invaild status query!")
          return data
        } catch (e) {
          return rejectWithValue(`${e}`)
        }
      },
      {
        pending: state => {
          state.isLoading = true
        },
        fulfilled: (state, { payload }) => {
          state.user = payload
          state.isLoading = false
        },
        rejected: state => {
          state.error = "Invaild request!"
          state.isLoading = false
        }
      }
    )
  })
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
