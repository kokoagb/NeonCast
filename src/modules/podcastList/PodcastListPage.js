import React from 'react'
import styled from 'styled-components'
import PodcastList from './PodcastList'
import PodcastListPagination from './PodcastListPagination'
import PageHeading from 'components/PageHeading'

const StyledMain = styled.main`
  grid-area: main;
  overflow-y: auto;
  padding: 0 1rem;
`

function PodcastListPage({ title, podcasts }) {
  return (
    <StyledMain className="podcast-list">
      <PageHeading>{title}</PageHeading>
      <PodcastList podcasts={podcasts} />
      <PodcastListPagination />
    </StyledMain>
  )
}

export default PodcastListPage
