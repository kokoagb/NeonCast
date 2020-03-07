import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledDiv = styled.div`
  display: flex;
  padding: 0 1rem;
  align-items: center;

  a {
    display: block;
  }

  .logo {
    display: block;
    width: 100%;

    @media only screen and (max-width: 800px) {
      display: none;
    }
  }

  .logo_m {
    display: none;
    width: 2.3rem;

    @media only screen and (max-width: 800px) {
      display: block;
    }
  }
`

function Logo() {
  return (
    <StyledDiv>
      <Link to="/">
        <img className="logo" src="/logo.svg" alt="logo" />
        <img className="logo_m" src="/logo_m.svg" alt="logo" />
      </Link>
    </StyledDiv>
  )
}

export default Logo
