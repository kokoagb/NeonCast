import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePageNumber } from './podcastListSlice'

function PodcastListPagination() {
  const dispatch = useDispatch()
  const { pagination } = useSelector(state => state.podcastList)
  const {
    page_number,
    total,
    next_page_number,
    previous_page_number,
  } = pagination
  const firstItem = (page_number - 1) * 20 + 1
  const lastItem = Math.min((page_number - 1) * 20 + 20, total)

  return (
    <div>
      <button onClick={e => dispatch(updatePageNumber(previous_page_number))}>
        &lt;
      </button>
      Showing {firstItem} - {lastItem} of {total}
      <button onClick={e => dispatch(updatePageNumber(next_page_number))}>
        &gt;
      </button>
    </div>
  )
}

export default PodcastListPagination
