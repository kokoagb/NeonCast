import React from 'react'
import styled from 'styled-components'

function PlayerProgressIndicator({ className, children }) {
  return <div className={className}>{children}</div>
}

export default styled(PlayerProgressIndicator)`
  color: #aaa;
  padding: 0.3rem;
  font-size: 0.8rem;
  font-family: monospace;
`
