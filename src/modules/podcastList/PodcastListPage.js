import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBestPodcasts } from 'modules/podcastList/podcastListSlice'
import PodcastList from './PodcastList'
import PodcastListPagination from './PodcastListPagination'

function PodcastListPage() {
  const dispatch = useDispatch()
  const { name, podcasts, pagination } = useSelector(state => state.podcastList)
  const { page_number } = pagination

  useEffect(() => {
    dispatch(fetchBestPodcasts(page_number))
  }, [page_number])

  return (
    <div className="podcast-list">
      <h1>{name}</h1>
      <PodcastList podcasts={podcasts} />
      <PodcastListPagination />
    </div>
  )
}

export default PodcastListPage
