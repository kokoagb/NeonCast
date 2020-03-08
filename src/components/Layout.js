import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const StyledDiv = styled.div`
  height: 100vh;
  display: block;

  @media only screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-areas: 'sidebar main';
  }
`

function Layout({ children }) {
  const isPlayerVisible = !!useSelector(state => state.nowPlaying)
  return <StyledDiv isPlayerVisible={isPlayerVisible}>{children}</StyledDiv>
}

export default Layout
