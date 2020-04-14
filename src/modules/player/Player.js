import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { throttle } from 'lodash'
import { getFormattedTime } from 'common/utils'
import Slider from 'rc-slider'
import Loader from 'components/Loader'
import PlaybackButton from 'components/PlaybackButton'
import PlayerEpisodeThumb from './PlayerEpisodeThumb'
import PlayerEpisodeTitle from './PlayerEpisodeTitle'
import PlayerPodcastTitle from './PlayerPodcastTitle'
import PlayerProgressIndicator from './PlayerProgressIndicator'

function Player({ className }) {
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

  if (!nowPlaying) return null

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

  const totalTime = nowPlaying.audio_length_sec

  return (
    <div className={className}>
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

      {isLoading ? (
        <Loader className="spin" />
      ) : (
        <PlaybackButton
          onClick={handlePlayPauseClick}
          state={isPlaying ? 'pause' : 'play'}
        />
      )}

      <PlayerEpisodeTitle>{nowPlaying.title}</PlayerEpisodeTitle>

      <PlayerPodcastTitle>{nowPlaying.podcast.title}</PlayerPodcastTitle>

      <PlayerProgressIndicator className="player-right">
        {getFormattedTime(currentTime)}/{getFormattedTime(totalTime)}
      </PlayerProgressIndicator>

      <audio
        ref={playerEl}
        onCanPlay={handleCanPlay}
        onTimeUpdate={handleTimeUpdate}
      ></audio>
    </div>
  )
}

export default styled(Player)`
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
    display: none;
    position: absolute;
    top: 0;
    left: 0;
  }

  .player-right {
    position: absolute;
    top: 0;
    right: 0;
  }

  @media only screen and (min-width: 800px) {
    bottom: 0;

    .player-left {
      display: block;
    }
  }
`
