import React from 'react'
import styled from 'styled-components'
import { useLocation, Link } from 'react-router-dom'

const StyledDiv = styled.div`
  grid-area: sidebar;
`

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
`

function Sidebar() {
  const location = useLocation()

  const menuItems = [
    {
      name: 'Trending Podcasts',
      location: '/',
    },
  ]

  const renderedMenuItems = menuItems.map(item => (
    <li key={item.location}>
      <Link to={item.location}>{item.name}</Link>
    </li>
  ))

  return (
    <StyledDiv>
      <StyledUl>{renderedMenuItems}</StyledUl>
    </StyledDiv>
  )
}

export default Sidebar
