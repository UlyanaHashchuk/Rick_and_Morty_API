import React, { useState, useEffect } from 'react'
import {
  Container,
  Grid,
  SingleAvatar,
  Info,
  Header,
  Name,
  Status,
  Red,
  Green,
  Grey,
  CurrentStatus,
  Location,
  LocationTitle,
  Place,
} from './index.styles'

const fetchById = (id) =>
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then((jsonResp) => jsonResp)

export default ({ id }) => {
  const [singleCharacter, setSingleCharacter] = useState([])

  useEffect(() => {
    fetchById(id).then((res) => setSingleCharacter([res]))
  }, [id])

  return (
    <Container>
      {singleCharacter.map(
        ({ id, image, name, status, species, origin, location }) => (
          <Grid key={id}>
            <SingleAvatar src={image} />
            <Info>
              <Header>
                <Name>{name}</Name>
                <Status>
                  {status === 'Dead' && <Red />}
                  {status === 'Alive' && <Green />}
                  {status === 'unknown' && <Grey />}
                  <CurrentStatus>
                    {status} - {species}
                  </CurrentStatus>
                </Status>
              </Header>
              <Location>
                <LocationTitle>Last known location:</LocationTitle>
                <Place>{origin.name}</Place>
              </Location>
              <Location>
                <LocationTitle>First seen in:</LocationTitle>
                <Place>{location.name}</Place>
              </Location>
            </Info>
          </Grid>
        )
      )}
    </Container>
  )
}
