import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBestPodcasts } from 'modules/podcastList/podcastListSlice'
import PodcastListPage from './PodcastListPage'

function TrendingPage() {
  const dispatch = useDispatch()
  const { podcasts, pagination } = useSelector(state => state.podcastList)
  const { page_number } = pagination

  useEffect(() => {
    dispatch(fetchBestPodcasts(page_number))
  }, [page_number, dispatch])

  return <PodcastListPage title={'Trending'} podcasts={podcasts} />
}

export default TrendingPage
