import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPodcast } from './podcastDetailsSlice'
import PodcastExcerpt from './PodcastExcerpt'
import EpisodeList from './EpisodeList'

const StyledMain = styled.main`
  display: grid;
  grid-area: main;
  overflow-y: hidden;
  grid-template-columns: 300px 1fr;

  & .grid-right {
    text-align: justify;
    padding: 0 1rem;
    overflow-y: auto;
  }
`

function PodcastDetailPage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { podcast, isLoading, error } = useSelector(
    state => state.podcastDetails,
  )

  useEffect(() => {
    dispatch(fetchPodcast(id))
  }, [id])

  if (error) return <div>An error occurred</div>

  if (isLoading || !podcast) return <div>Loading...</div>

  return (
    <StyledMain>
      <div>
        <PodcastExcerpt podcast={podcast} />
      </div>
      <div className="grid-right">
        <div className="podcast-description">{podcast.description}</div>

        <EpisodeList episodes={podcast.episodes} />
      </div>
    </StyledMain>
  )
}

export default PodcastDetailPage
