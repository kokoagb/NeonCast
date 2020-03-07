import React from 'react'
import styled from 'styled-components'
import { useRouteMatch, Link } from 'react-router-dom'
import { Activity, Coffee } from 'react-feather'

const StyledDiv = styled.div`
  grid-area: sidebar;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;

    a {
      display: flex;
      align-items: center;
      text-transform: uppercase;

      svg {
        margin-right: 1rem;
      }
    }

    &.active {
      background-color: #252525;
      border-radius: 0 2rem 2rem 0;

      & a {
        color: white;
      }
    }
  }
`

function Sidebar() {
  const menuItems = [
    {
      name: 'Trending',
      location: '/',
      match: useRouteMatch('/'),
      icon: <Activity />,
    },
    {
      name: 'Genres',
      location: '/genres',
      match: useRouteMatch('/genres'),
      icon: <Coffee />,
    },
  ]

  const renderedMenuItems = menuItems.map(item => (
    <li
      key={item.location}
      className={item.match && item.match.isExact ? 'active' : ''}
    >
      <Link to={item.location}>
        {item.icon}
        {item.name}
      </Link>
    </li>
  ))

  return (
    <StyledDiv>
      <StyledUl>{renderedMenuItems}</StyledUl>
    </StyledDiv>
  )
}

export default Sidebar
