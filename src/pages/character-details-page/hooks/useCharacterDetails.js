import { useState, useEffect } from 'react'

const fetchById = (id) =>
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then((jsonResp) => jsonResp)

const fetchByLocation = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((jsonResp) => jsonResp)

export default ({ params }) => {
  const [singleCharacter, setSingleCharacter] = useState(null)
  const [showLocation, setShowLocation] = useState(null)
  const [locationDetails, setLocationDetails] = useState({})
  const { id } = params

  useEffect(() => {
    fetchById(id).then((res) => setSingleCharacter(res))
  }, [id])

  useEffect(() => {
    if (singleCharacter && showLocation === 'origin') {
      const {
        origin: { url },
      } = singleCharacter
      fetchByLocation(url).then((res) => setLocationDetails(res))
    }
    if (singleCharacter && showLocation === 'last') {
      const {
        location: { url },
      } = singleCharacter
      fetchByLocation(url).then((res) => setLocationDetails(res))
    }
  }, [singleCharacter, showLocation])

  return { showLocation, singleCharacter, setShowLocation, locationDetails }
}
