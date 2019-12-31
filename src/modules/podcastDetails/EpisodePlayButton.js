import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { PlayCircle } from 'react-feather'
import { play } from 'modules/player/nowPlayingSlice'

const StyledButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`

function EpisodePlayButton({ episode }) {
  const dispatch = useDispatch()

  return (
    <StyledButton onClick={e => dispatch(play(episode))}>
      <PlayCircle className="icon" />
    </StyledButton>
  )
}

export default EpisodePlayButton
