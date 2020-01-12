import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Loader, Play, Pause } from 'react-feather'
import { throttle } from 'lodash'
import { getFormattedTime } from 'common/utils'

const StyledDiv = styled.div`
  grid-area: player;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 1;

  img {
    float: left;
    width: 100px;
    height: 100px;
  }

  button {
    border: none;
    padding: 0;
    margin: 0;
    background: none;
    cursor: pointer;
  }

  .monospace {
    font-family: monospace;
  }
`

function Player() {
  const nowPlaying = useSelector(state => state.nowPlaying)
  const [isLoading, setIsLoading] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const playerEl = useRef(null)

  useEffect(() => {
    if (!nowPlaying) return
    setIsLoading(true)
    playerEl.current.src = nowPlaying.audio
  }, [nowPlaying])

  const handleCanPlay = () => {
    setIsLoading(false)
    playerEl.current.play()
    setIsPlaying(true)
  }

  const handlePlayPauseClick = () => {
    if (playerEl.current.paused) {
      playerEl.current.play()
      setIsPlaying(true)
    } else {
      playerEl.current.pause()
      setIsPlaying(false)
    }
  }

  const handleTimeUpdate = throttle(() => {
    setCurrentTime(getFormattedTime(playerEl.current.currentTime))
  }, 1000)

  if (!nowPlaying) return null

  const loader = isLoading ? <Loader className="icon spin" /> : null
  const playPause = !isLoading ? (
    <button onClick={handlePlayPauseClick}>
      {isPlaying ? <Pause className="icon" /> : <Play className="icon" />}
    </button>
  ) : null

  const totalTime = getFormattedTime(nowPlaying.audio_length_sec)

  return (
    <StyledDiv>
      <img src={nowPlaying.image} alt={nowPlaying.title} />

      <div>
        {loader}
        {playPause}
      </div>
      <div>{nowPlaying.title}</div>
      <div>
        <small className="monospace">
          {currentTime}/{totalTime}
        </small>
      </div>
      <audio
        ref={playerEl}
        onCanPlay={handleCanPlay}
        onTimeUpdate={handleTimeUpdate}
      ></audio>
    </StyledDiv>
  )
}

export default Player
