import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Loader } from 'react-feather'

const StyledDiv = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: white;
`

function Player() {
  const nowPlaying = useSelector(state => state.nowPlaying)
  const [isLoading, setIsLoading] = useState(false)
  const playerEl = useRef(null)

  useEffect(() => {
    if (!nowPlaying) return
    setIsLoading(true)
    playerEl.current.src = nowPlaying.audio
  }, [nowPlaying])

  const handleCanPlay = () => {
    setIsLoading(false)
    playerEl.current.play()
  }

  if (!nowPlaying) return null

  return (
    <StyledDiv>
      {isLoading && <Loader className="icon spin" />}
      <p>{nowPlaying.title}</p>
      <audio ref={playerEl} onCanPlay={handleCanPlay}></audio>
    </StyledDiv>
  )
}

export default Player
