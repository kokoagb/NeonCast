import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const StyledHeader = styled.header`
  grid-area: header;
`

function header() {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  )
}

export default header
