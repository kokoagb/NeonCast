import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Search } from 'react-feather'
import { fetchSearchResults } from './searchResultsSlice'
import { debounce } from 'lodash'
import SearchResults from './SearchResults'

const StyledForm = styled.form`
  position: relative;
  display: flex;
  max-width: 800px;

  svg {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
  }

  input {
    flex: 1;
    border: none;
    font-size: 1rem;
    border-radius: 1.5rem;
    padding: 0.5rem 0.5rem 0.5rem 2.5rem;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    font-family: Oswald, sans-serif;
    outline: none;
  }

  button {
    position: absolute;
    right: 0.25rem;
    top: 0.25rem;
    border: none;
    background-color: #000000;
    border-radius: 1rem;
    padding: 0.25rem 1rem;
    color: white;
    cursor: pointer;
    font-family: Oswald;
    font-size: 1rem;
  }
`

function SearchBox() {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()

  const runSearch = useRef(
    debounce(query => {
      dispatch(fetchSearchResults(query))
    }, 1000),
  ).current

  const handleChange = e => {
    const val = e.target.value
    setQuery(val)
    if (val.length > 3) runSearch(val)
  }

  return (
    <StyledForm>
      <Search />
      <input
        type="text"
        placeholder="Search podcasts or episodes..."
        onChange={handleChange}
        value={query}
      />
      <SearchResults />
      <button>search</button>
    </StyledForm>
  )
}

export default SearchBox