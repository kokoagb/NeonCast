import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBestPodcasts } from 'modules/podcastList/podcastListSlice'
import PodcastList from './PodcastList'
import PodcastListPagination from './PodcastListPagination'
import PageHeading from 'components/PageHeading'

const StyledMain = styled.main`
  grid-area: main;
  overflow-y: auto;
  padding: 0 1rem;
`

function PodcastListPage() {
  const dispatch = useDispatch()
  const { collectionTitle, podcasts, pagination } = useSelector(
    state => state.podcastList,
  )
  const { page_number } = pagination

  useEffect(() => {
    dispatch(fetchBestPodcasts(page_number))
  }, [page_number, dispatch])

  return (
    <StyledMain className="podcast-list">
      <PageHeading>{collectionTitle}</PageHeading>
      <PodcastList podcasts={podcasts} />
      <PodcastListPagination />
    </StyledMain>
  )
}

export default PodcastListPage
