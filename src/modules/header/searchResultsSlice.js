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
      state.isLoading = false
      state.podcasts = payload
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
    const response = await searchPodcasts(query)
    dispatch(getSearchResultsSuccess(response.results))
  } catch (e) {
    dispatch(getSearchResultsFailure(e))
  }
}

export default searchResults.reducer
