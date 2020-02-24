import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBestPodcasts } from 'modules/podcastList/podcastListSlice'
import PodcastListPage from './PodcastListPage'

function TrendingPage() {
  const { genre_id } = useParams()
  const dispatch = useDispatch()
  const { podcasts, pagination } = useSelector(state => state.podcastList)
  const { page_number } = pagination

  useEffect(() => {
    dispatch(fetchBestPodcasts(page_number, genre_id))
  }, [genre_id, page_number, dispatch])

  return <PodcastListPage title={genre_id} podcasts={podcasts} />
}

export default TrendingPage
