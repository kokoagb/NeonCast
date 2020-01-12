import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBestPodcasts } from 'modules/podcastList/podcastListSlice'
import PodcastList from './PodcastList'
import PodcastListPagination from './PodcastListPagination'

const StyledMain = styled.main`
  grid-area: main;
  overflow-y: auto;
  padding: 0 1rem;
`

function PodcastListPage() {
  const dispatch = useDispatch()
  const { name, podcasts, pagination } = useSelector(state => state.podcastList)
  const { page_number } = pagination

  useEffect(() => {
    dispatch(fetchBestPodcasts(page_number))
  }, [page_number])

  return (
    <StyledMain className="podcast-list">
      <h1>{name}</h1>
      <PodcastList podcasts={podcasts} />
      <PodcastListPagination />
    </StyledMain>
  )
}

export default PodcastListPage
