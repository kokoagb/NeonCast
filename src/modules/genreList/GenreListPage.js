import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import GenreList from './GenreList'
import PageHeading from 'components/PageHeading'
import { fetchGenres } from './genresSlice'
import Main from 'components/Main'

function GenreListPage() {
  const dispatch = useDispatch()
  const { isLoading, error, genres } = useSelector(state => state.genres)

  useEffect(() => {
    dispatch(fetchGenres())
  }, [dispatch])

  return (
    <Main className="podcast-list">
      <PageHeading>Genres</PageHeading>
      <GenreList genres={genres} />
    </Main>
  )
}

export default GenreListPage
