import React, { useState } from 'react'
import GlobalStyle from './index.styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CharactersContext from '../contexts/CharactersContext'
import Header from '../Components/Header'
import SearchPage from '../pages/search-page'

export default () => {
  const [characters, setCharaters] = useState([])

  return (
    <>
      <GlobalStyle />
      <Header />
      <CharactersContext.Provider value={{ characters, setCharaters }}>
        <Router>
          <Switch>
            <Route path="/">
              <SearchPage />
            </Route>
          </Switch>
        </Router>
      </CharactersContext.Provider>
    </>
  )
}
