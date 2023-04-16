import { createSlice } from "@reduxjs/toolkit"

interface initialStateProp {
  darkTheme: boolean
}

const initialState: initialStateProp = {
  darkTheme: true,
}

export const themeSlice = createSlice({
  name: "theme",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    handleTheme: (state) => {
      console.log("clicked")

      state.darkTheme = !state.darkTheme
    },
  },
})

export const { handleTheme } = themeSlice.actions

export default themeSlice.reducer
