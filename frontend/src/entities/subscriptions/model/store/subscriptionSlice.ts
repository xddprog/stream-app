import { createSlice } from "@reduxjs/toolkit"
import { ISubscriptionsState } from "./types"
import { subscribeds } from "../mocks/subscriptions"

export const initialState: ISubscriptionsState = {
  subscriptions: subscribeds
}

export const subscriptionsSlice = createSlice({
  name: "subscriptions-slice",
  initialState,
  reducers: () => ({})
})

export const subscriptionsctions = subscriptionsSlice.actions
export const subscriptionsReducer = subscriptionsSlice.reducer
