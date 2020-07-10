import React from 'react'
import {
  Container,
  Grid,
  Character,
  Avatar,
  Name,
} from '../WelcomeCharacters/index.styles'

export default ({ results }) => {
  return (
    <Container>
      <Grid>
        {results.map(({ id, name, image }) => (
          <Character key={id}>
            <Avatar src={image} />
            <Name>{name}</Name>
          </Character>
        ))}
      </Grid>
    </Container>
  )
}
