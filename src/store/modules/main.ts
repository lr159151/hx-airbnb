import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
  headerConfig: any
}

const initialState: InitialState = {
  headerConfig: {
    isFixed: false
  }
}
const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeHeaderConfigAction(state, { payload }) {
      state.headerConfig = payload
    }
  }
})

export const { changeHeaderConfigAction } = mainSlice.actions
export default mainSlice.reducer
