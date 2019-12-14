import axios from 'axios'

const http = axios.create()

export async function searchPodcasts(q) {
  const { data } = await http.get('/api/search', {
    params: { q },
  })
  return data
}

export async function typeAhead(q) {
  const { data } = await http.get('/api/typeahead', {
    params: { q },
  })
  return data
}

export async function getBestPodcasts() {
  const { data } = await http.get('/api/best_podcasts')
  return data
}
