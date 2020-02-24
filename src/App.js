import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from 'components/Layout'
import Header from 'modules/header/Header'
import Sidebar from 'modules/sideBar/SideBar'
import TrendingPage from 'modules/podcastList/TrendingPage'
import SearchResultsPage from 'modules/podcastList/SearchResultsPage'
import PodcastDetailPage from 'modules/podcastDetails/PodcastDetailsPage'
import GenreListPage from 'modules/genreList/GenreListPage'
import Player from 'modules/player/Player'

import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Sidebar />
        <Switch>
          <Route path="/podcasts/:id">
            <PodcastDetailPage />
          </Route>
          <Route path="/search/:query">
            <SearchResultsPage />
          </Route>
          <Route path="/genres">
            <GenreListPage />
          </Route>
          <Route path="/">
            <TrendingPage />
          </Route>
        </Switch>
        <Player />
      </Layout>
    </Router>
  )
}

export default App
