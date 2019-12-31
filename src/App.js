import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from 'components/Layout'
import Sidebar from 'modules/sideBar/SideBar'
import PodcastListPage from 'modules/podcastList/PodcastListPage'
import PodcastDetailPage from 'modules/podcastDetails/PodcastDetailsPage'
import Player from 'modules/player/Player'

import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Sidebar />
        <Switch>
          <Route path="/podcasts/:id">
            <PodcastDetailPage />
          </Route>
          <Route path="/test">
            <div>TEST</div>
          </Route>
          <Route path="/">
            <PodcastListPage />
          </Route>
        </Switch>
        <Player />
      </Layout>
    </Router>
  )
}

export default App
