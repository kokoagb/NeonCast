import { createSlice } from '@reduxjs/toolkit'

const nowPlaying = createSlice({
  name: 'nowPlaying',
  initialState: null,
  reducers: {
    play(state, { payload }) {
      return payload
    },
  },
})

export const { play } = nowPlaying.actions

export default nowPlaying.reducer
