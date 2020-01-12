import { padStart } from 'lodash'

export const getFormattedTime = seconds => {
  const hours = Math.floor(seconds / 3600)
  const hoursStr = hours ? `${padStart(hours, 2, '0')}:` : ''
  seconds = seconds % 3600
  const minutes = Math.floor(seconds / 60)
  const minutesStr = minutes ? `${padStart(minutes, 2, '0')}:` : '00:'
  seconds = seconds % 60
  const secondsStr = padStart(Math.floor(seconds), 2, '0')
  return `${hoursStr}${minutesStr}${secondsStr}`
}
