import React from 'react'
import styled from 'styled-components'
import PodcastImage from 'components/PodcastImage'

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
      <h1>{podcast.title}</h1>
      <aside>{podcast.publisher}</aside>
    </StyledDiv>
  )
}

export default PodcastExcerpt
