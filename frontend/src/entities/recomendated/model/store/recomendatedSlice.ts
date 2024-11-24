import { createSlice } from "@reduxjs/toolkit"
import { recomendates } from "../mocks/recomendated"
import { IRecomendatedState } from "./types"

export const initialState: IRecomendatedState = {
  recomendated: recomendates
}

export const recomendatedSlice = createSlice({
  name: "recomendated-slice",
  initialState,
  reducers: () => ({})
})

export const recomendatedActions = recomendatedSlice.actions
export const recomendatedReducer = recomendatedSlice.reducer
