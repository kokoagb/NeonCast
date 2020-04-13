import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { throttle } from 'lodash'
import { getFormattedTime } from 'common/utils'
import PlaybackButton from 'components/PlaybackButton'
import Slider from 'rc-slider'
import PlayerEpisodeThumb from './PlayerEpisodeThumb'
import Loader from 'components/Loader'

const StyledDiv = styled.div`
  height: 100px;
  position: fixed;
  bottom: 70px;
  left: 0;
  width: 100%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  align-items: center;
  z-index: 1;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .rc-slider-track {
    background-color: #9801f0;
  }

  .slider {
    position: absolute;
    top: -9px;
    z-index: 1;
  }

  .player-left {
    position: absolute;
    top: 0;
    left: 0;
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

  @media only screen and (min-width: 800px) {
    bottom: 0;
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

  const handleSliderChange = value => {
    playerEl.current.currentTime = value
    setCurrentTime(value)
  }

  const handleTimeUpdate = throttle(() => {
    setCurrentTime(playerEl.current.currentTime)
  }, 1000)

  if (!nowPlaying) return null

  const loader = isLoading ? <Loader className="spin" /> : null
  const playPause = !isLoading ? (
    <PlaybackButton
      onClick={handlePlayPauseClick}
      state={isPlaying ? 'pause' : 'play'}
    />
  ) : null

  const totalTime = nowPlaying.audio_length_sec

  return (
    <StyledDiv>
      <Slider
        className="slider"
        min={0}
        max={totalTime}
        value={currentTime}
        tipFormatter={getFormattedTime}
        onChange={handleSliderChange}
      />

      <PlayerEpisodeThumb
        src={nowPlaying.image}
        alt="{nowPlaying.title}"
        className="player-left"
      />

      {loader}
      {playPause}

      <div>{nowPlaying.title}</div>

      <small className="monospace">
        {getFormattedTime(currentTime)}/{getFormattedTime(totalTime)}
      </small>

      <audio
        ref={playerEl}
        onCanPlay={handleCanPlay}
        onTimeUpdate={handleTimeUpdate}
      ></audio>
    </StyledDiv>
  )
}

export default Player
