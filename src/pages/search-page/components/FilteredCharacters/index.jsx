import React from 'react'
import { Link } from 'react-router-dom'
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
