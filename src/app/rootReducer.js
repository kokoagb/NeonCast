import { combineReducers } from '@reduxjs/toolkit'

import podcastList from 'modules/podcastList/podcastListSlice'

const rootReducer = combineReducers({
  podcastList: podcastList,
})

export default rootReducer
