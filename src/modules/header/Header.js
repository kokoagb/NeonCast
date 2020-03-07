import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import SearchBox from './SearchBox'

const StyledHeader = styled.header`
  grid-area: header;
  display: grid;
  grid-template-columns: 250px auto;
  background-color: #252525;

  .search-box-wrapper {
    display: flex;
    padding: 0 1rem;
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and (max-width: 800px) {
    display: flex;
    .search-box-wrapper {
      padding-left: 0;
      flex: 1;
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
