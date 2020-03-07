import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLi = styled.li`
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
`

function SidebarNavListItem({ item }) {
  return (
    <StyledLi className={item.match && item.match.isExact ? 'active' : ''}>
      <Link to={item.location}>
        {item.icon}
        {item.name}
      </Link>
    </StyledLi>
  )
}

export default SidebarNavListItem
