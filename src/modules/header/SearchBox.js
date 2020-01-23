import React, { useState, useRef, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Search } from 'react-feather'
import { fetchSearchResults } from './searchResultsSlice'
import { debounce } from 'lodash'
import SearchSuggestions from './SearchSuggestions'

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
  const [redirectTo, setRedirectTo] = useState(null)
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const dispatch = useDispatch()

  const formRef = useRef(null)

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

  const handleSubmit = e => {
    e.preventDefault()
    setRedirectTo('/search')
  }

  useEffect(() => {
    const clickHandler = e => {
      const isFormClick = formRef.current.contains(e.target)
      if (isFormClick && !isDropdownVisible) setIsDropdownVisible(true)
      if (!isFormClick && isDropdownVisible) setIsDropdownVisible(false)
    }

    document.addEventListener('click', clickHandler)

    return () => {
      document.removeEventListener('click', clickHandler)
    }
  }, [isDropdownVisible])

  if (redirectTo) {
    return <Redirect to={redirectTo} />
  }

  return (
    <StyledForm onSubmit={handleSubmit} ref={formRef}>
      <Search />
      <input
        type="text"
        placeholder="Search podcasts..."
        onChange={handleChange}
        value={query}
      />
      <SearchSuggestions isDropdownVisible={isDropdownVisible} />
      <button>search</button>
    </StyledForm>
  )
}

export default SearchBox
