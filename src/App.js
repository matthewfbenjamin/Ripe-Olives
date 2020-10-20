import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import { AppProvider } from './AppContext'
import { Home } from './Home'
import './App.css'

const App = () => {
  return (
    <AppProvider>
      <HashRouter>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </HashRouter>
    </AppProvider>
  )
}

export default App
