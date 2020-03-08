import React from 'react'
import styled from 'styled-components'
import SidebarNavList from './SidebarNavList'

const StyledDiv = styled.div`
  grid-area: sidebar;
  position: relative;
  padding-right: 1rem;

  &:after {
    content: '';
    display: block;
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

  @media only screen and (max-width: 800px) {
    padding-right: 0;
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
