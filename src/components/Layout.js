import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const StyledDiv = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px ${props =>
      props.isPlayerVisible
        ? 'calc(100vh - 170px) 100px'
        : 'calc(100vh - 70px)'};
  grid-template-areas:
    'header header'
    'sidebar main'
    ${props => (props.isPlayerVisible ? "'player player'" : '')};

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'main'
      ${props => (props.isPlayerVisible ? "'player'" : '')};
  }
`

function Layout({ children }) {
  const isPlayerVisible = !!useSelector(state => state.nowPlaying)
  return <StyledDiv isPlayerVisible={isPlayerVisible}>{children}</StyledDiv>
}

export default Layout
