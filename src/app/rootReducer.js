import { combineReducers } from '@reduxjs/toolkit'

import podcastList from 'modules/podcastList/podcastListSlice'
import podcastDetails from 'modules/podcastDetails/podcastDetailsSlice'

const rootReducer = combineReducers({
  podcastList,
  podcastDetails,
})

export default rootReducer
