import React from 'react'
import styled from 'styled-components'
import EpisodePlayButton from './EpisodePlayButton'

const StyledDiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 0.5rem;
  background-color: white;

  & .episode-title {
    flex: 1;
    padding: 0 1rem;
  }

  & img {
    width: 50px;
  }
`

function EpisodeListItem({ podcast, episode }) {
  return (
    <StyledDiv>
      <EpisodePlayButton podcast={podcast} episode={episode} />
      <div className="episode-title">{episode.title}</div>
    </StyledDiv>
  )
}

export default EpisodeListItem
