import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface userState {
  displayName: string
  uid: string
  accessToken: string
}

const initialState: userState = {
  displayName: "",
  uid: "",
  accessToken: "",
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<userState>) => {
      state.displayName = action.payload.displayName
      state.uid = action.payload.uid
      state.accessToken = action.payload.accessToken
    },
    clearuser: (state) => {
      state.displayName = ""
      state.uid = ""
      state.accessToken = ""
    },
  },
})

export const { loginUser, clearuser } = userSlice.actions

export default userSlice.reducer
