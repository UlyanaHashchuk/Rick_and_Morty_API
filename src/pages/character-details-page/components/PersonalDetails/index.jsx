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
  selectedCharacter: {
    id,
    image,
    name,
    status,
    species,
    origin: { name: originName },
    location: { name: locationName },
  },
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
            isDisabled={originName === 'unknown'}
          >
            {originName}
          </Place>
        </Location>
        <Location>
          <LocationTitle>First seen in:</LocationTitle>
          <Place
            onClick={() => onClickHandler('last')}
            isDisabled={locationName === 'unknown'}
          >
            {locationName}
          </Place>
        </Location>
      </Info>
    </Grid>
  </Container>
)
