import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./reducers/userSlice"
import searchSlice from "./reducers/searchSlice"

export const store = configureStore({
  reducer: {
    user: userSlice,
    search: searchSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
