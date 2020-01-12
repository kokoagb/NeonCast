import { createSlice } from '@reduxjs/toolkit'
import { searchPodcasts } from 'api/podcastAPI'

const searchResults = createSlice({
  name: 'searchResults',
  initialState: {
    isLoading: false,
    podcasts: [],
    episodes: [],
    error: null,
  },
  reducers: {
    getSearchResultsStart(state) {
      state.isLoading = true
    },
    getSearchResultsSuccess(state, { payload }) {
      const { podcasts, episodes } = payload
      state.isLoading = false
      state.podcasts = podcasts
      state.episodes = episodes
      state.error = null
    },
    getSearchResultsFailure(state, { payload }) {
      state.isLoading = false
      state.error = payload
    },
  },
})

export const {
  getSearchResultsStart,
  getSearchResultsSuccess,
  getSearchResultsFailure,
} = searchResults.actions

export const fetchSearchResults = query => async dispatch => {
  try {
    dispatch(getSearchResultsStart())
    const responses = await Promise.all([
      searchPodcasts(query, 'podcast'),
      searchPodcasts(query, 'episode'),
    ])
    const [podcasts, episodes] = responses.map(r => r.results)
    dispatch(getSearchResultsSuccess({ podcasts, episodes }))
  } catch (e) {
    dispatch(getSearchResultsFailure(e))
  }
}

export default searchResults.reducer
