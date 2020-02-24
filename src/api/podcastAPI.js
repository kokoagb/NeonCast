import axios from 'axios'

const http = axios.create()

export async function searchPodcasts(q) {
  const { data } = await http.get('/api/search', {
    params: { q, type: 'podcast' },
  })
  return data
}

export async function searchEpisodes(q) {
  const { data } = await http.get('/api/search', {
    params: { q, type: 'episode' },
  })
  return data
}

export async function typeahead(q) {
  const { data } = await http.get('/api/typeahead', {
    params: { q, show_podcasts: 0, show_genres: 0, safe_mode: 0 },
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

export async function getGenres() {
  const { data } = await http.get(`/api/genres`)
  return data
}
