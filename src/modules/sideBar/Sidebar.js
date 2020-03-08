import React from 'react'
import styled from 'styled-components'
import SidebarNavList from './SidebarNavList'

const StyledDiv = styled.div`
  grid-area: sidebar;
  position: fixed;
  padding-right: 0;
  bottom: 0;
  left: 0;
  height: 70px;
  width: 100%;

  &:after {
    content: '';
    display: none;
    position: absolute;
    top: 10%;
    right: 0;
    width: 1px;
    bottom: 10%;
    background-color: rgb(244, 200, 255);
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgb(244, 200, 255) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  @media only screen and (min-width: 800px) {
    padding-right: 1rem;
    position: relative;

    &:after {
      display: block;
    }
  }
`

function Sidebar() {
  return (
    <StyledDiv>
      <SidebarNavList />
    </StyledDiv>
  )
}

export default Sidebar
