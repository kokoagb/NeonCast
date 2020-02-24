import React from 'react'
import styled from 'styled-components'
import { useRouteMatch, Link } from 'react-router-dom'

const StyledDiv = styled.div`
  grid-area: sidebar;
`

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    padding: 0.5rem;

    &.active {
    background-color: black;
    border-radius: 0 2rem 2rem 0;

    & a {
      color: white;
    }
  }
`

function Sidebar() {
  const menuItems = [
    {
      name: 'Trending Podcasts',
      location: '/',
      match: useRouteMatch('/'),
    },
    {
      name: 'Genres',
      location: '/genres',
      match: useRouteMatch('/genres'),
    },
  ]

  const renderedMenuItems = menuItems.map(item => (
    <li
      key={item.location}
      className={item.match && item.match.isExact ? 'active' : ''}
    >
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
