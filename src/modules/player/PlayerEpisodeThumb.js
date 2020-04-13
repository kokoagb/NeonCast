import React from 'react'
import styled from 'styled-components'
import PodcastImage from 'components/PodcastImage'

function PlayerEpisodeThumb({ src, alt, className }) {
  return (
    <PodcastImage
      src={src}
      alt={alt}
      isRounded={false}
      hasShadow={false}
      className={className}
    />
  )
}

const StyledPlayerEpisodeThumb = styled(PlayerEpisodeThumb)`
  width: 100px;
  height: 100px;
`

export default StyledPlayerEpisodeThumb
