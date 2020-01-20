import React from 'react'
import styled from 'styled-components'
import PodcastImage from 'components/PodcastImage'
import PageHeading from 'components/PageHeading'

const StyledDiv = styled.div`
  text-align: right;

  & h1 {
    margin-bottom: 0;
  }

  & aside {
    opacity: 0.5;
  }
`

function PodcastExcerpt({ podcast }) {
  return (
    <StyledDiv>
      <PodcastImage src={podcast.image} alt={podcast.title} />
      <PageHeading>{podcast.title}</PageHeading>
      <aside>{podcast.publisher}</aside>
    </StyledDiv>
  )
}

export default PodcastExcerpt
