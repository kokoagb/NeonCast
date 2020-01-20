import React from 'react'
import styled from 'styled-components'

const StyledH1 = styled.h1`
  margin-top: 0;
`

function PageHeading({ children }) {
  return <StyledH1>{children}</StyledH1>
}

export default PageHeading
