import { createSlice } from '@reduxjs/toolkit'
import { getBestPodcasts } from 'api/podcastAPI'

const podcastList = createSlice({
  name: 'podcastList',
  initialState: {
    podcasts: [],
    isLoading: false,
    error: null,
    pagination: {
      total: 1,
      page_number: 1,
      next_page_number: null,
      previous_page_number: null,
    },
  },
  reducers: {
    getPodcastsStart(state) {
      state.isLoading = true
    },
    getPodcastsSuccess(state, { payload }) {
      const {
        total,
        page_number,
        next_page_number,
        previous_page_number,
        collectionTitle,
        podcasts,
      } = payload
      state.isLoading = false
      state.podcasts = podcasts
      state.collectionTitle = collectionTitle
      state.pagination = {
        total,
        page_number,
        next_page_number,
        previous_page_number,
      }
      state.error = null
    },
    getPodcastsFailure(state, { payload }) {
      state.isLoading = false
      state.error = payload
    },
    updatePageNumber(state, { payload }) {
      state.pagination.page_number = payload
    },
  },
})

export const {
  getPodcastsStart,
  getPodcastsSuccess,
  getPodcastsFailure,
  updatePageNumber,
} = podcastList.actions

export const fetchBestPodcasts = (page = 1, genre_id) => async dispatch => {
  try {
    dispatch(getPodcastsStart())
    const response = await getBestPodcasts({ page, genre_id })
    const payload = { ...response, collectionTitle: 'Trending' }
    dispatch(getPodcastsSuccess(payload))
  } catch (e) {
    dispatch(getPodcastsFailure(e))
  }
}

export default podcastList.reducer
