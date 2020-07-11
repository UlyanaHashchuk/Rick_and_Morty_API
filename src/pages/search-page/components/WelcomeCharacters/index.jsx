import React, { useState, useEffect } from 'react'
import {
  Container,
  Grid,
  Character,
  Avatar,
  Name,
  Loading,
} from './index.styles'

const generateRandomCharacters = () => {
  let arrayOfCharacters = []

  while (arrayOfCharacters.length !== 8) {
    const random = Math.floor(Math.random() * (592 - 1) + 1)

    if (!arrayOfCharacters.includes(random)) {
      arrayOfCharacters.push(random)
    }
  }

  return arrayOfCharacters
}

const fetchWelcomeCharacters = () => {
  let generatedCharacters = generateRandomCharacters()

  return fetch(
    `https://rickandmortyapi.com/api/character/${generatedCharacters}`
  )
    .then((res) => res.json())
    .then((jsonResp) => jsonResp)
}

export default () => {
  const [welcomeCharacters, setWelcomeCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchWelcomeCharacters().then((character) => {
      setWelcomeCharacters(character)
      setIsLoading(false)
    })
  }, [])

  return (
    <Container>
      <Grid>
        {isLoading && <Loading>Loading...</Loading>}
        {welcomeCharacters.map(({ id, name, image }) => (
          <Character key={id}>
            <Avatar src={image} />
            <Name>{name}</Name>
          </Character>
        ))}
      </Grid>
    </Container>
  )
}
