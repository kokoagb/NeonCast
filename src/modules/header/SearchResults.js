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
  padding: 1rem;

  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`

function SearchResults() {
  const { isLoading, error, podcasts, episodes } = useSelector(
    state => state.searchResults,
  )
  if (isLoading || (!podcasts.length && !episodes.length)) return null
  if (error) return <div>Error</div>

  return (
    <StyledDiv className="search-results">
      <ul>
        {podcasts.map(podcast => (
          <li key={podcast.id}>
            <Link to={`/podcasts/${podcast.id}`}>{podcast.title_original}</Link>
          </li>
        ))}
      </ul>
      <ul>
        {episodes.slice(3).map(episode => (
          <li key={episode.id}>
            <Link to={'#'}>{episode.title_original}</Link>
          </li>
        ))}
      </ul>
    </StyledDiv>
  )
}

export default SearchResults
