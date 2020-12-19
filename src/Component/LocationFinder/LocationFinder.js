import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const LocationFinder = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        
      }}
      query={{
        key: 'AIzaSyBPP7jRPs7ARmja-IPEnx-mv7L9Jv64-_o',
        language: 'en',
      }}
    />
  );
};

export default LocationFinder;