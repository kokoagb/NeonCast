import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function GenreListItem({ className, genre }) {
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(https://picsum.photos/seed/${genre.id}/300/150.jpg?blur=5)`,
      }}
    >
      <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
    </div>
  )
}

export default styled(GenreListItem)`
  border-radius: 0.5rem;
  background-color: #b9b8ff;

  a {
    display: block;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 0 0 15px white;
  }
`
