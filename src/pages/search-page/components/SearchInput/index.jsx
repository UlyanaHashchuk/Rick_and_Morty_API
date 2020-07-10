import React, { useState } from 'react'
import { Form, Label, Input, Button } from './index.styles'

export default ({ onSubmit }) => {
  const [characterName, setCharacterName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(`https://rickandmortyapi.com/api/character/?name=${characterName}`)
      .then((res) => res.json())
      .then((jsonResp) => {
        onSubmit(jsonResp)
        setCharacterName('')
      })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Enter Rick and Morty character name:</Label>
      <Input
        type="text"
        value={characterName}
        onChange={({ target: { value } }) => setCharacterName(value)}
        placeholder="Character name..."
        required
      />
      <Button type="submit">Search</Button>
    </Form>
  )
}
