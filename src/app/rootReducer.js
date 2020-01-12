import { combineReducers } from '@reduxjs/toolkit'

import podcastList from 'modules/podcastList/podcastListSlice'
import podcastDetails from 'modules/podcastDetails/podcastDetailsSlice'
import nowPlaying from 'modules/player/nowPlayingSlice'
import searchResults from 'modules/header/searchResultsSlice'

const rootReducer = combineReducers({
  podcastList,
  podcastDetails,
  nowPlaying,
  searchResults,
})

export default rootReducer
