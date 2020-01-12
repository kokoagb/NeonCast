import React from 'react'
import SearchBox from './SearchBox'

export default {
  title: 'SearchBox',
  decorators: [storyFn => <div style={{ padding: '1rem' }}>{storyFn()}</div>],
}

export const basic = () => <SearchBox />
