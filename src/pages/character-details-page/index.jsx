import React from 'react'
import useCharacterDetails from './hooks/useCharacterDetails'
import PersonalDetails from './components/PersonalDetails'
import LocationDetails from './components/LocationDetails'

export default ({ match: { params } }) => {
  const {
    showLocation,
    singleCharacter,
    setShowLocation,
    locationDetails,
  } = useCharacterDetails({ params })

  return (
    <>
      {singleCharacter && (
        <PersonalDetails
          singleCharacter={singleCharacter}
          onClickHandler={setShowLocation}
        />
      )}

      {showLocation && <LocationDetails locationDetails={locationDetails} />}
    </>
  )
}
