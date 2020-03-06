import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledDiv = styled.div`
  display: flex;
  padding: 0 1rem;
  align-items: center;

  a,
  img {
    display: block;
    width: 100%;
  }
`

function Logo() {
  return (
    <StyledDiv>
      <Link to="/">
        <img src="/logo.svg" alt="logo" />
      </Link>
    </StyledDiv>
  )
}

export default Logo
