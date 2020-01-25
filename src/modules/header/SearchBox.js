import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Search } from 'react-feather'
import { fetchSearchSuggestions } from './searchSuggestionsSlice'
import { debounce } from 'lodash'
import SearchSuggestions from './SearchSuggestions'

const ARROW_UP = 'ArrowUp'
const ARROW_DOWN = 'ArrowDown'

const StyledForm = styled.form`
  position: relative;
  display: flex;
  max-width: 800px;

  & .search-suggestions {
    display: none;
  }

  &:focus-within .search-suggestions {
    display: block;
  }

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
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2) inset;
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
  const [cachedQuery, setCachedQuery] = useState('')
  const [activeSuggestion, setActiveSuggestion] = useState(null)
  const dispatch = useDispatch()
  const history = useHistory()

  const { isLoading, error, suggestions } = useSelector(
    state => state.searchSuggestions,
  )

  const runSearch = useRef(
    debounce(query => {
      dispatch(fetchSearchSuggestions(query))
    }, 50),
  ).current

  const handleChange = e => {
    const val = e.target.value
    setQuery(val)
    setCachedQuery(val)
    if (val.length > 3) runSearch(val)
  }

  const handleKeyDown = e => {
    const { key } = e
    const currentIdx = suggestions.indexOf(activeSuggestion)

    if ([ARROW_UP, ARROW_DOWN].includes(key)) {
      e.preventDefault()
    } else {
      return
    }

    if (suggestions.length === 0) {
      return
    }

    const newSuggestion =
      (key === ARROW_DOWN
        ? suggestions[currentIdx + 1]
        : suggestions[currentIdx - 1]) || null
    const newQuery = newSuggestion || cachedQuery
    setActiveSuggestion(newSuggestion)
    setQuery(newQuery)
  }

  const handleSubmit = e => {
    e.preventDefault()
    history.push('/search')
  }

  return (
    <StyledForm onSubmit={handleSubmit} tabIndex="0">
      <Search />
      <input
        type="text"
        placeholder="Search podcasts..."
        onChange={handleChange}
        value={query}
        onKeyDown={handleKeyDown}
      />
      {isLoading || error || suggestions.length < 1 ? null : (
        <SearchSuggestions
          className="search-suggestions"
          suggestions={suggestions}
          activeSuggestion={activeSuggestion}
        />
      )}
      <button>search</button>
    </StyledForm>
  )
}

export default SearchBox
