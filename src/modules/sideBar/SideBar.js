import React from 'react'
import styled from 'styled-components'
import { useRouteMatch, Link } from 'react-router-dom'
import { Activity, Coffee, Heart } from 'react-feather'

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
    display: none;
  }
`

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    padding: 1rem;

    a {
      display: flex;
      align-items: center;
      text-transform: uppercase;

      svg {
        margin-right: 1rem;
      }
    }

    &.active {
      background-color: rgba(152, 0, 240, 1);
      background: linear-gradient(
        to right,
        rgba(152, 0, 240, 1) 0%,
        rgba(198, 12, 245, 0.5) 50%,
        rgba(255, 255, 255, 0) 100%
      );

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
    {
      name: 'My podcasts',
      location: '/subscriptions',
      match: useRouteMatch('/subscriptions'),
      icon: <Heart />,
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
