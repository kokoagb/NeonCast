import React from 'react'
import styled from 'styled-components'
import GenreListItem from './GenreListItem'

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

function GenreList({ genres }) {
  return (
    <StyledUl>
      {genres.map(genre => (
        <li key={genre.id}>
          <GenreListItem>{genre.name}</GenreListItem>
        </li>
      ))}
    </StyledUl>
  )
}

export default GenreList
