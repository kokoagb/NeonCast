import { createSlice } from '@reduxjs/toolkit'
import { getGenres } from 'api/podcastAPI'

const genres = createSlice({
  name: 'genres',
  initialState: {
    isLoading: false,
    genres: [],
    error: null,
  },
  reducers: {
    getGenresStart(state) {
      state.isLoading = true
    },
    getGenresSuccess(state, { payload }) {
      state.isLoading = false
      state.genres = payload
      state.error = null
    },
    getGenresFailure(state, { payload }) {
      state.isLoading = false
      state.error = payload
    },
  },
})

export const {
  getGenresStart,
  getGenresSuccess,
  getGenresFailure,
} = genres.actions

export const fetchGenres = () => async (dispatch, getState) => {
  const { genres } = getState()

  if (genres.isLoading || genres.genres.length > 0) {
    return
  }

  try {
    dispatch(getGenresStart())
    const response = await getGenres()
    dispatch(getGenresSuccess(response.genres))
  } catch (e) {
    dispatch(getGenresFailure(e))
  }
}

export default genres.reducer
