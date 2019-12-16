import React from 'react'
import PodcastListItem from './PodcastListItem'
import styled from 'styled-components'

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;
  max-width: 1275px;
  list-style-type: none;
  padding: 0;

  @media screen and (min-width: 625px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

function PodcastList({ podcasts }) {
  return (
    <StyledUl>
      {podcasts.map(podcast => (
        <li key={podcast.id}>
          <PodcastListItem podcast={podcast} />
        </li>
      ))}
    </StyledUl>
  )
}

export default PodcastList
