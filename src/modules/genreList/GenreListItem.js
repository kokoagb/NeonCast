import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function GenreListItem({ className, genre }) {
  return (
    <div className={className}>
      <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
    </div>
  )
}

export default styled(GenreListItem)`
  height: 5rem;
  border-radius: 0.5rem;
  background-color: #b9b8ff;
  display: flex;
  justify-content: center;
  align-items: center;
`
