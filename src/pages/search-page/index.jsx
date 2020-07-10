import React, { useState } from 'react'
import CharactersContext from '../../contexts/CharactersContext'
import WelcomeCharacters from './components/WelcomeCharacters'
import SearchInput from './components/SearchInput'
import FilteredCharacters from './components/FilteredCharacters'

export default () => {
  const { characters, setCharaters } = React.useContext(CharactersContext)
  const [whatToShow, setWhatToShow] = useState(false)

  const getCharacters = (character) => {
    setCharaters(character)
    setWhatToShow(true)
  }

  const { results = [] } = characters

  return (
    <>
      <SearchInput onSubmit={getCharacters} />
      {whatToShow ? (
        <FilteredCharacters results={results} />
      ) : (
        <WelcomeCharacters />
      )}
    </>
  )
}
