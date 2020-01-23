import { createSlice } from '@reduxjs/toolkit'
import { typeahead } from 'api/podcastAPI'

const searchSuggestions = createSlice({
  name: 'searchSuggestions',
  initialState: {
    isLoading: false,
    suggestions: [],
    error: null,
  },
  reducers: {
    getSearchSuggestionsStart(state) {
      state.isLoading = true
    },
    getSearchSuggestionsSuccess(state, { payload }) {
      state.isLoading = false
      state.suggestions = payload
      state.error = null
    },
    getSearchSuggestionsFailure(state, { payload }) {
      state.isLoading = false
      state.error = payload
    },
  },
})

export const {
  getSearchSuggestionsStart,
  getSearchSuggestionsSuccess,
  getSearchSuggestionsFailure,
} = searchSuggestions.actions

export const fetchSearchSuggestions = query => async dispatch => {
  try {
    dispatch(getSearchSuggestionsStart())
    const response = await typeahead(query)
    dispatch(getSearchSuggestionsSuccess(response.terms))
  } catch (e) {
    dispatch(getSearchSuggestionsFailure(e))
  }
}

export default searchSuggestions.reducer
