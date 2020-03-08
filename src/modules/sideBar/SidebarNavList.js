import React from 'react'
import styled from 'styled-components'
import { useRouteMatch } from 'react-router-dom'
import { Activity, Coffee, Heart } from 'react-feather'
import SidebarNavListItem from './SidebarNavListItem'

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;

  @media only screen and (max-width: 800px) {
    display: flex;
    margin: 0;
    height: 100%;
  }
`

function SidebarNavList() {
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
    <SidebarNavListItem item={item} key={item.location} />
  ))

  return <StyledUl>{renderedMenuItems}</StyledUl>
}

export default SidebarNavList
