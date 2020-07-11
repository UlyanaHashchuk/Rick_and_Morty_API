import React from 'react'
import PersonalDetails from './components/PersonalDetails'

export default ({ match: { params } }) => {
  const { id } = params

  return <PersonalDetails id={id} />
}
