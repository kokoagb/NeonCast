import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 100px auto 100px;
  grid-template-areas:
    'header header'
    'sidebar main'
    'player player';
`

function Layout({ children }) {
  return <StyledDiv>{children}</StyledDiv>
}

export default Layout
