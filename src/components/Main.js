import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.main`
  grid-area: main;
  padding: 0 1rem 1rem 1rem;
  margin-top: 70px;
  margin-bottom: 70px;

  @media only screen and (min-width: 800px) {
    overflow-y: auto;
    margin-bottom: 0;
  }
`

export default StyledMain
