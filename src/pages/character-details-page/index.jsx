import React from 'react'
import useCharacterDetails from './hooks/useCharacterDetails'
import PersonalDetails from './components/PersonalDetails'
import LocationDetails from './components/LocationDetails'

export default ({ match: { params } }) => {
  const {
    locationType,
    selectedCharacter,
    setLocationType,
    locationDetails,
  } = useCharacterDetails({ params })

  return (
    <>
      {selectedCharacter && (
        <PersonalDetails
          selectedCharacter={selectedCharacter}
          onClickHandler={setLocationType}
        />
      )}
      {locationType && <LocationDetails locationDetails={locationDetails} />}
    </>
  )
}
