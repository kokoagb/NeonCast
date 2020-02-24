import { combineReducers } from '@reduxjs/toolkit'

import podcastList from 'modules/podcastList/podcastListSlice'
import podcastDetails from 'modules/podcastDetails/podcastDetailsSlice'
import nowPlaying from 'modules/player/nowPlayingSlice'
import searchResults from 'modules/podcastList/searchResultsSlice'
import searchSuggestions from 'modules/header/searchSuggestionsSlice'
import genres from 'modules/genreList/genresSlice'

const rootReducer = combineReducers({
  podcastList,
  podcastDetails,
  nowPlaying,
  searchResults,
  searchSuggestions,
  genres,
})

export default rootReducer
