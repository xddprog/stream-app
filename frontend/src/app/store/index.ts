import { userReducer } from "@entities/user"
import { recomendatedReducer } from "@entities/recomendated"
import { streamReducer } from "@entities/streams"
import { subscriptionsReducer } from "@entities/subscriptions"
import { combineReducers, configureStore } from "@reduxjs/toolkit"

export const reducers = combineReducers({
  streamReducer,
  recomendatedReducer,
  subscriptionsReducer,
  userReducer
})

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
