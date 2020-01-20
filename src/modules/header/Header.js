import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import SearchBox from './SearchBox'

const StyledHeader = styled.header`
  grid-area: header;
  display: grid;
  grid-template-columns: 250px auto;

  .search-box-wrapper {
    display: flex;
    padding-left: 1rem;
    flex-direction: column;
    justify-content: center;
  }
`

function header() {
  return (
    <StyledHeader>
      <Logo />
      <div className="search-box-wrapper">
        <SearchBox />
      </div>
    </StyledHeader>
  )
}

export default header
