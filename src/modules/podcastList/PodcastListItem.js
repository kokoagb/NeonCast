import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import PodcastImage from 'components/PodcastImage'

const StyledDiv = styled.div`
  text-align: center;

  & a {
    display: block;
  }
`

function PodcastListItem({ podcast }) {
  return (
    <StyledDiv>
      <Link to={`/podcasts/${podcast.id}`}>
        <PodcastImage
          src={podcast.image}
          alt={podcast.title || podcast.title_original}
        />
        {podcast.title || podcast.title_original}
      </Link>
    </StyledDiv>
  )
}

export default PodcastListItem
