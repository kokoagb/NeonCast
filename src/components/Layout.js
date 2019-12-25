import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
`

function Layout({ children }) {
  return <StyledDiv>{children}</StyledDiv>
}

export default Layout
