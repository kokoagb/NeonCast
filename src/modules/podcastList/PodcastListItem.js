import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  text-align: center;

  & a {
    display: block;
  }

  & img {
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`

function PodcastListItem({ podcast }) {
  return (
    <StyledDiv>
      <a href="/podcast.listennotes_url">
        <img src={podcast.image} alt={podcast.title} />
        {podcast.title}
      </a>
    </StyledDiv>
  )
}

export default PodcastListItem
