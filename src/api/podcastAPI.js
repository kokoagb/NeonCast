import axios from 'axios'

const http = axios.create()

export async function searchPodcasts(q) {
  const { data } = await http.get('/api/search', {
    params: { q },
  })
  return data
}

export async function typeahead(q) {
  const { data } = await http.get('/api/typeahead', {
    params: { q },
  })
  return data
}

export async function getBestPodcasts(params) {
  const { data } = await http.get('/api/best_podcasts', { params })
  return data
}

export async function getPodcast(id) {
  const { data } = await http.get(`/api/podcasts/${id}`)
  return data
}
