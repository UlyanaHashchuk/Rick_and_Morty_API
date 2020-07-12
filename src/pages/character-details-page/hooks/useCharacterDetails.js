import { useState, useEffect } from 'react'
import { fetchData } from '../../../utils/fetchData'

export default ({ params: { id } }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [locationType, setLocationType] = useState(null)
  const [locationDetails, setLocationDetails] = useState({})

  useEffect(() => {
    fetchData(
      `https://rickandmortyapi.com/api/character/${id}`
    ).then((jsonResp) => setSelectedCharacter(jsonResp))
  }, [id])

  useEffect(() => {
    if (selectedCharacter) {
      let url
      const { origin, location } = selectedCharacter

      if (locationType === 'origin') {
        url = origin.url
      }

      if (locationType === 'last') {
        url = location.url
      }

      if (url) {
        fetchData(url).then((res) => setLocationDetails(res))
      }
    }
  }, [selectedCharacter, locationType])

  return { locationType, selectedCharacter, setLocationType, locationDetails }
}
