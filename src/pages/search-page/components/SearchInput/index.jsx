import React, { useState } from 'react'
import { fetchData } from '../../../../utils/fetchData'
import { Form, Label, Input, Button } from './index.styles'

export default ({ onSubmit }) => {
  const [characterName, setCharacterName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    fetchData(
      `https://rickandmortyapi.com/api/character/?name=${characterName}`
    ).then((jsonResp) => {
      onSubmit(jsonResp)
      setCharacterName('')
    })
  }

  const handleChange = ({ target: { value } }) => setCharacterName(value)

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Enter Rick and Morty character name:</Label>
      <Input
        type="text"
        value={characterName}
        onChange={handleChange}
        placeholder="Character name..."
        required
      />
      <Button type="submit">Search</Button>
    </Form>
  )
}
