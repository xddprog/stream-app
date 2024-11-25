import { streams } from "../mocks"
import { IStreamState } from "./types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export const initialState: IStreamState = {
  streams: streams,
  selectStream: null
}

export const streamSlice = createSlice({
  name: "stream-slice",
  initialState,
  reducers: () => ({
    setSelectStream: (state, { payload }: PayloadAction<number>) => {
      const findStream = state.streams.findIndex(stream => stream.id === payload)
      if (findStream !== -1) {
        state.selectStream = state.streams[findStream]
      }
    }
  })
})

export const streamActions = streamSlice.actions
export const streamReducer = streamSlice.reducer
