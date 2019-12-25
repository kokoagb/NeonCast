import React from 'react'
import styled from 'styled-components'
import EpisodeListItem from './EpisodeListItem'

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
`

function EpisodeList({ episodes }) {
  const renderedEpisodes = episodes.map(episode => (
    <li key={episode.id}>
      <EpisodeListItem episode={episode} />
    </li>
  ))

  return <StyledUl>{renderedEpisodes}</StyledUl>
}

export default EpisodeList
