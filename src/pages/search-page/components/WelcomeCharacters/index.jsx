import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchData } from '../../../../utils/fetchData'
import {
  Container,
  Grid,
  Character,
  Avatar,
  Name,
  Loading,
} from './index.styles'

const generateRandomCharacters = (randomCharactersAmount = 8) => {
  let arrayOfCharacters = []
  const MAX_CHARACTERS_ID = 592
  const MIN_CHARACTERS_ID = 1

  while (arrayOfCharacters.length !== randomCharactersAmount) {
    const random = Math.floor(
      Math.random() * (MAX_CHARACTERS_ID - MIN_CHARACTERS_ID) +
        MIN_CHARACTERS_ID
    )

    if (!arrayOfCharacters.includes(random)) {
      arrayOfCharacters.push(random)
    }
  }

  return arrayOfCharacters
}

export default ({ useRandomCharacters = true, customCharacters = [] }) => {
  const [characters, setCharacters] = useState(customCharacters)
  const [isLoading, setIsLoading] = useState(true)

  let generatedCharacters = generateRandomCharacters()

  useEffect(() => {
    if (useRandomCharacters) {
      fetchData(
        `https://rickandmortyapi.com/api/character/${generatedCharacters}`
      ).then((character) => {
        setCharacters(character)
        setIsLoading(false)
      })
    }
  }, [useRandomCharacters])

  useEffect(() => {
    if (!useRandomCharacters) {
      setCharacters(customCharacters)
    }
  }, [customCharacters, useRandomCharacters])

  return (
    <Container>
      <Grid>
        {isLoading && <Loading>Loading...</Loading>}
        {characters.map(({ id, name, image }) => (
          <Character key={id}>
            <Link to={`/${id}`}>
              <Avatar src={image} />
            </Link>
            <Name>{name}</Name>
          </Character>
        ))}
      </Grid>
    </Container>
  )
}
