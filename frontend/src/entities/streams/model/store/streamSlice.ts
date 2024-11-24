import { streams } from "../mocks"
import { IStreamState } from "./types"
import { createSlice } from "@reduxjs/toolkit"

export const initialState: IStreamState = {
  streams: streams,
  selectStream: null
}

export const streamSlice = createSlice({
  name: "stream-slice",
  initialState,
  reducers: () => ({})
})

export const streamActions = streamSlice.actions
export const streamReducer = streamSlice.reducer
