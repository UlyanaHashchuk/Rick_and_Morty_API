import React, { useState, useEffect } from 'react'
import {
  Container,
  Grid,
  Character,
  Avatar,
  Name,
  Loading,
} from './index.styles'

const fetchWelcomeCharacters = () => {
  return fetch(
    'https://rickandmortyapi.com/api/character/1,2,3,4,55,124,332,590'
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
