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

  input {
    flex: 1;
    color: black;
    border: none;
    font-size: 1rem;
    border-radius: 1.5rem;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    background-color: rgba(255, 255, 255, 0.3);
    font-family: Oswald, sans-serif;
    outline: none;

    &::placeholder {
      color: #333;
    }
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    border: none;
    background-color: transparent;
    border-radius: 2rem;
    padding: 0.5rem 0.75rem;
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

    if (suggestions.length === 0) return

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
    if (!query) return
    history.push(`/search/${query}`)
  }

  return (
    <StyledForm onSubmit={handleSubmit} tabIndex="0">
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
      <button>
        <Search />
      </button>
    </StyledForm>
  )
}

export default SearchBox
