const path = require('path')
const axios = require('axios')
const dotenv = require('dotenv')
const express = require('express')
const port = process.env.PORT || 3001
const app = express()

dotenv.config()

const endpoints = [
  '/search',
  '/typeahead',
  '/best_podcasts',
  '/curated_pocasts',
  '/genres',
  '/episodes',
  '/podcasts/:id',
  '/epidodes/:id',
]

const http = axios.create({
  baseURL: 'https://listen-api.listennotes.com/api/v2',
  headers: {
    'X-ListenAPI-Key': process.env.LISTEN_API_KEY,
  },
})

app.get('/health', (req, res) => {
  res.send('OK')
})

endpoints.forEach(endpoint => {
  app.get(`/api${endpoint}`, async (req, res) => {
    const response = await makeRequest(endpoint, req.query, req.params)
    res.send(response.data)
  })
})

function makeRequest(endpoint, query, { id }) {
  if (id) endpoint = endpoint.replace(':id', id)
  return http.get(endpoint, {
    params: query,
  })
}

if (process.env.NODE_ENV === 'production') {
  const publicPath = path.join(__dirname, 'build')
  app.use(express.static(publicPath))

  app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
  })
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
