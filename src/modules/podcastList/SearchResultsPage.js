import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PodcastListPage from './PodcastListPage'
import { fetchSearchResults } from './searchResultsSlice'

function TrendingPage() {
  const { query } = useParams()
  const dispatch = useDispatch()
  const { isLoading, error, podcasts } = useSelector(
    state => state.searchResults,
  )
  const title = `Search Results for ${query}`

  useEffect(() => {
    dispatch(fetchSearchResults(query))
  }, [query, dispatch])

  return <PodcastListPage title={title} podcasts={podcasts} />
}

export default TrendingPage
