import React from 'react'
import styled from 'styled-components'

function PlayButton({ className, onClick = () => {}, state = 'play' }) {
  return (
    <button className={className} onClick={onClick}>
      {state === 'play' ? (
        <img src="/play.svg" alt="play" />
      ) : (
        <img src="/pause.svg" alt="pause" />
      )}
    </button>
  )
}

const StyledPlayButton = styled(PlayButton)`
  width: 3rem;
  height: 3rem;
  outline: none;
  border-radius: 50%;

  &:focus {
    box-shadow: 0 0 0 4px #b3f3ac;
  }
`

export default StyledPlayButton
