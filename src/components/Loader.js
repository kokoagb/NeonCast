import React from 'react'
import styled from 'styled-components'

function Loader({ className }) {
  return <img src="/loader.svg" alt="loader" className={className} />
}

const StyledLoader = styled(Loader)`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`

export default StyledLoader
