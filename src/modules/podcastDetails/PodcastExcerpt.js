import React from 'react'
import PodcastImage from 'components/PodcastImage'

function PodcastExcerpt({ podcast }) {
  return (
    <div>
      <PodcastImage src={podcast.image} alt={podcast.title} />
      <h1>{podcast.title}</h1>
      <aside>{podcast.publisher}</aside>
    </div>
  )
}

export default PodcastExcerpt
