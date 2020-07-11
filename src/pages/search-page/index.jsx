import React, { useState } from 'react'
import WelcomeCharacters from './components/WelcomeCharacters'
import SearchInput from './components/SearchInput'

export default () => {
  const [characters, setCharaters] = useState([])
  const [hasSearchResults, setHasSearchResults] = useState(false)

  const getCharacters = (character) => {
    setCharaters(character)
    setHasSearchResults(true)
  }

  const { results = [] } = characters

  return (
    <>
      <SearchInput onSubmit={getCharacters} />
      <WelcomeCharacters
        useRandomCharacters={!hasSearchResults}
        customCharacters={results}
      />
    </>
  )
}
