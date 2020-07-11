import React from 'react'
import {
  Container,
  Grid,
  SingleAvatar,
  Info,
  Header,
  Name,
  Status,
  Color,
  CurrentStatus,
  Location,
  LocationTitle,
  Place,
} from './index.styles'

export default ({
  singleCharacter: { id, image, name, status, species, origin, location },
  onClickHandler,
}) => (
  <Container>
    <Grid key={id}>
      <SingleAvatar src={image} />
      <Info>
        <Header>
          <Name>{name}</Name>
          <Status>
            {status === 'Dead' && <Color red />}
            {status === 'Alive' && <Color green />}
            {status === 'unknown' && <Color grey />}
            <CurrentStatus>
              {status} - {species}
            </CurrentStatus>
          </Status>
        </Header>
        <Location>
          <LocationTitle>Last known location:</LocationTitle>
          <Place
            onClick={() => onClickHandler('origin')}
            isDisabled={origin.name === 'unknown'}
          >
            {origin.name}
          </Place>
        </Location>
        <Location>
          <LocationTitle>First seen in:</LocationTitle>
          <Place
            onClick={() => onClickHandler('last')}
            isDisabled={location.name === 'unknown'}
          >
            {location.name}
          </Place>
        </Location>
      </Info>
    </Grid>
  </Container>
)
