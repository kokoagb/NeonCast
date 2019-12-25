import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  align-items: center;

  & img {
    width: 50px;
  }
`

function EpisodeListItem({ episode }) {
  return (
    <StyledDiv>
      <img src={episode.image} alt={episode.title} />
      {episode.title}
    </StyledDiv>
  )
}

export default EpisodeListItem
