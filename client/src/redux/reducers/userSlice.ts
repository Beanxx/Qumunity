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
      // eslint-disable-next-line no-param-reassign
      state.displayName = action.payload.displayName
      // eslint-disable-next-line no-param-reassign
      state.uid = action.payload.uid
      // eslint-disable-next-line no-param-reassign
      state.accessToken = action.payload.accessToken
    },
    clearuser: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.displayName = ""
      // eslint-disable-next-line no-param-reassign
      state.uid = ""
      // eslint-disable-next-line no-param-reassign
      state.accessToken = ""
    },
  },
})

export const { loginUser, clearuser } = userSlice.actions

export default userSlice.reducer
