import React from 'react'
import styled from 'styled-components'

function PlayerPodcastTitle({ className, children }) {
  return <div className={className}>{children}</div>
}

export default styled(PlayerPodcastTitle)`
  color: #aaa;
  font-size: 0.8rem;
`
