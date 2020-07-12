import React from 'react'
import GlobalStyle from './index.styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import SearchPage from '../pages/search-page'
import CharacterDetails from '../pages/character-details-page'

export default () => (
  <>
    <GlobalStyle />
    <Header />
    <Router>
      <Switch>
        <Route exact path="/:id" component={CharacterDetails} />
        <Route exact path="/">
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  </>
)
