import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBestPodcasts } from 'modules/podcastList/podcastListSlice'
import PodcastListPage from './PodcastListPage'
import { fetchGenres } from 'modules/genreList/genresSlice'

function TrendingPage() {
  const { genre_id } = useParams()
  const dispatch = useDispatch()
  const { podcasts, pagination } = useSelector(state => state.podcastList)
  const { genres } = useSelector(state => state.genres)
  const { page_number } = pagination

  const genre = genres.find(genre => genre.id === Number(genre_id))

  useEffect(() => {
    dispatch(fetchGenres())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchBestPodcasts(page_number, genre_id))
  }, [genre_id, page_number, dispatch])

  return (
    <PodcastListPage title={genre ? genre.name : null} podcasts={podcasts} />
  )
}

export default TrendingPage
