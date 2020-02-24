import React from 'react'
import styled from 'styled-components'

function GenreListItem({ className, children }) {
  return <div className={className}>{children}</div>
}

export default styled(GenreListItem)`
  height: 5rem;
  border-radius: 0.5rem;
  background-color: #b9b8ff;
  display: flex;
  justify-content: center;
  align-items: center;
`
