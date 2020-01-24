import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`
  position: absolute;
  background-color: white;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  z-index: 1000;
  border-radius: 1rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  padding: 1rem 0;

  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    & li {
      padding: 0 1rem;

      &.active {
        color: white;
        background-color: blue;
      }
    }
  }
`

function SearchSuggestions({ suggestions, activeSuggestion, className }) {
  return (
    <StyledDiv className={className}>
      <ul>
        {suggestions.map(suggestion => (
          <li
            key={suggestion}
            className={suggestion === activeSuggestion ? 'active' : ''}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    </StyledDiv>
  )
}

export default SearchSuggestions
