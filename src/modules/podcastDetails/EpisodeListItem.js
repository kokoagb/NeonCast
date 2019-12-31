import React from 'react'
import styled from 'styled-components'
import EpisodePlayButton from './EpisodePlayButton'

const StyledDiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 0.5rem;
  background-color: white;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 35px;
    width: 50px;
    box-shadow: 0 0 9px rgba(0, 0, 0, 0.2);
    z-index: -1;
  }

  & .episode-title {
    flex: 1;
    padding: 0 1rem;
  }

  & img {
    width: 50px;
  }
`

function EpisodeListItem({ episode }) {
  return (
    <StyledDiv>
      <img src={episode.image} alt={episode.title} />
      <div className="episode-title">{episode.title}</div>
      <EpisodePlayButton episode={episode} />
    </StyledDiv>
  )
}

export default EpisodeListItem
