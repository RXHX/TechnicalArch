import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const LocationFinder = () => {
  
  return (

    <GooglePlacesAutocomplete
        placeholder='Search'
        minLength={2} // minimum length of text to search
        autoFocus={true}
        returnKeyType={'search'} // Can be left out for default return key 
        listViewDisplayed={false}    // true/false/undefined
        fetchDetails={true}
        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            props.notifyChange(details.geometry.location);
        }}
        query={{
            key: 'AIzaSyBPP7jRPs7ARmja-IPEnx-mv7L9Jv64-_o',
            language: 'en'
        }}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={300}
    />
);
};

export default LocationFinder;
