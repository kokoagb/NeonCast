import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import blankImage from 'common/blankImage'

const bgAnimation = keyframes`
  0%{background-position:50% 0%}
  50%{background-position:51% 100%}
  100%{background-position:50% 0%}
`

const StyledImg = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background: linear-gradient(0deg, #ffffff, #dfdfdf);
  background-size: 400% 400%;
  animation: ${bgAnimation} 1s ease infinite;
`

function PodcastImage({ src, alt }) {
  const [isLoading, setIsLoading] = useState(true)
  const imgEventListener = () => setIsLoading(false)

  useEffect(() => {
    const img = document.createElement('img')
    // img.addEventListener('load', imgEventListener)
    // img.addEventListener('error', imgEventListener)
    img.src = src

    return () => {
      img.removeEventListener('load', imgEventListener)
      img.removeEventListener('error', imgEventListener)
    }
  }, [src])

  return <StyledImg src={isLoading ? blankImage : src} alt={alt} />
}

export default PodcastImage
