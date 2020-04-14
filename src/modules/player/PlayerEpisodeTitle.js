import React from 'react'
import styled from 'styled-components'

function PlayerEpisodeTitle({ className, children }) {
  return <div className={className}>{children}</div>
}

export default styled(PlayerEpisodeTitle)`
  white-space: nowrap;
`
