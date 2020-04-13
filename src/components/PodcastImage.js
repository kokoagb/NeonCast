import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import blankImage from 'common/blankImage'

function PodcastImage({ src, alt, className }) {
  const [isLoading, setIsLoading] = useState(true)
  const imgEventListener = () => setIsLoading(false)

  useEffect(() => {
    const img = document.createElement('img')
    img.addEventListener('load', imgEventListener)
    img.addEventListener('error', imgEventListener)
    img.src = src

    return () => {
      img.removeEventListener('load', imgEventListener)
      img.removeEventListener('error', imgEventListener)
    }
  }, [src])

  return (
    <img src={isLoading ? blankImage : src} alt={alt} className={className} />
  )
}

const bgAnimation = keyframes`
  0%{background-position:50% 0%}
  50%{background-position:51% 100%}
  100%{background-position:50% 0%}
`

const StyledPodcastImage = styled(PodcastImage)`
  width: 100%;
  border-radius: ${({ isRounded = true }) => (isRounded ? '0.5rem' : '0')};
  box-shadow: ${({ hasShadow = true }) =>
    hasShadow ? '0 0 10px rgba(0, 0, 0, 0.2)' : 'none'};
  background: linear-gradient(0deg, #ffffff, #dfdfdf);
  background-size: 400% 400%;
  animation: ${bgAnimation} 3s ease infinite;
`

export default StyledPodcastImage
