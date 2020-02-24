import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import GenreList from './GenreList'
import PageHeading from 'components/PageHeading'
import { fetchGenres } from './genresSlice'

const StyledMain = styled.main`
  grid-area: main;
  overflow-y: auto;
  padding: 0 1rem;
`

function GenreListPage() {
  const dispatch = useDispatch()
  const { isLoading, error, genres } = useSelector(state => state.genres)

  useEffect(() => {
    dispatch(fetchGenres())
  }, [dispatch])

  return (
    <StyledMain className="podcast-list">
      <PageHeading>Genres</PageHeading>
      <GenreList genres={genres} />
    </StyledMain>
  )
}

export default GenreListPage
