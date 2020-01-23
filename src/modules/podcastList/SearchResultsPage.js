import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import PodcastListPage from './PodcastListPage'

function TrendingPage() {
  const { isLoading, error, podcasts } = useSelector(
    state => state.searchResults,
  )

  return <PodcastListPage title={'Search Results'} podcasts={podcasts} />
}

export default TrendingPage
