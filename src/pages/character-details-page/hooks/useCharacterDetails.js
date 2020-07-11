import { useState, useEffect } from 'react'

const fetchData = (url) =>
  new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((jsonResp) => {
        if (!jsonResp.error) {
          return resolve(jsonResp)
        }
        return reject()
      })
      .catch((error) => reject(error))
  })

export default ({ params }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [locationType, setLocationType] = useState(null)
  const [locationDetails, setLocationDetails] = useState({})
  const { id } = params

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
