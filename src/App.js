import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react"

import { AppProvider } from './AppContext'
import { Home } from './Home'
import './App.css'

const App = () => {
  return (
    <ChakraProvider>
      <AppProvider>
        <HashRouter>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route>
              <Redirect to="/home" />
            </Route>
          </Switch>
        </HashRouter>
      </AppProvider>
    </ChakraProvider>
  )
}

export default App
