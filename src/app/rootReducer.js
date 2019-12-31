import { combineReducers } from '@reduxjs/toolkit'

import podcastList from 'modules/podcastList/podcastListSlice'
import podcastDetails from 'modules/podcastDetails/podcastDetailsSlice'
import nowPlaying from 'modules/player/nowPlayingSlice'

const rootReducer = combineReducers({
  podcastList,
  podcastDetails,
  nowPlaying,
})

export default rootReducer
