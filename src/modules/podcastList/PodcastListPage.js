import React from 'react'
import styled from 'styled-components'
import PodcastList from './PodcastList'
import PodcastListPagination from './PodcastListPagination'
import PageHeading from 'components/PageHeading'
import Main from 'components/Main'

function PodcastListPage({ title, podcasts }) {
  return (
    <Main className="podcast-list">
      <PageHeading>{title}</PageHeading>
      <PodcastList podcasts={podcasts} />
      <PodcastListPagination />
    </Main>
  )
}

export default PodcastListPage
