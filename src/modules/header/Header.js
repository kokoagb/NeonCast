import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import SearchBox from './SearchBox'

const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  grid-template-columns: 250px auto;
  background-color: #252525;

  .search-box-wrapper {
    display: flex;
    padding-right: 1rem;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }

  @media only screen and (min-width: 800px) {
    display: grid;

    .search-box-wrapper {
      padding-left: 1rem;
    }
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
