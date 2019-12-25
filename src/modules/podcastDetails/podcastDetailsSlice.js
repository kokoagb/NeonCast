import { createSlice } from '@reduxjs/toolkit'
import { getPodcast } from 'api/podcastAPI'

const podcast = createSlice({
  name: 'podcast',
  initialState: {
    podcast: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    getPodcastStart(state) {
      state.isLoading = true
    },
    getPodcastSuccess(state, { payload }) {
      state.isLoading = false
      state.podcast = payload
      state.error = null
    },
    getPodcastFailure(state, { payload }) {
      state.isLoading = false
      state.error = payload
    },
  },
})

export const {
  getPodcastStart,
  getPodcastSuccess,
  getPodcastFailure,
} = podcast.actions

export const fetchPodcast = id => async dispatch => {
  try {
    dispatch(getPodcastStart())
    const response = await getPodcast(id)
    dispatch(getPodcastSuccess(response))
  } catch (e) {
    dispatch(getPodcastFailure(e))
  }
}

export default podcast.reducer
