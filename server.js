const axios = require('axios')
const dotenv = require('dotenv')
const express = require('express')
const app = express()

dotenv.config()

const endpoints = ['/search', '/typeahead', '/best_podcasts', '/podcasts/:id']

const http = axios.create({
  baseURL: 'https://listen-api.listennotes.com/api/v2',
  headers: {
    'X-ListenAPI-Key': process.env.LISTEN_API_KEY,
  },
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

app.listen(3001, () => {
  console.log('Listening on port 3001')
})
