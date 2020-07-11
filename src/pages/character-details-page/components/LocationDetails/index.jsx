import React from 'react'
import {
  Component,
  Details,
  Title,
  Name,
  Type,
  Dimension,
} from './index.styled'

export default ({ locationDetails: { name, type, dimension } }) => (
  <Component>
    <Details>
      <Name>
        <Title>Name: </Title>
        {name}
      </Name>
      <Type>
        <Title>Type: </Title>
        {type}
      </Type>
      <Dimension>
        <Title>Dimension: </Title>
        {dimension}
      </Dimension>
    </Details>
  </Component>
)
