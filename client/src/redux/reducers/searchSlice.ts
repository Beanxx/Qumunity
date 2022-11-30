import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface searchState {
  search: string
}

const initialState: searchState = {
  search: "",
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getInput: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
  },
})

export const { getInput } = searchSlice.actions

export default searchSlice.reducer
