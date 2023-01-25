import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
  detailInfo: any
}
const initialState: InitialState = {
  detailInfo: {}
}

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    changeDetailInfoAction(state, { payload }) {
      state.detailInfo = payload
    }
  }
})

export const { changeDetailInfoAction } = detailSlice.actions
export default detailSlice.reducer
