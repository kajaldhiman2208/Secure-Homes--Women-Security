import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapContainer = () => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // Example function to fetch nearby places from an API
    const fetchNearbyPlaces = async () => {
      try {
        // Make API request to fetch nearby places
        const response = await fetch('api/nearby-place');
        const data = await response.json();
        
        // Process the data to extract necessary information for markers
        const processedMarkers = data.map(place => ({
          position: { lat: place.latitude, lng: place.longitude },
          name: place.name,
          address: place.address,
        }));
        
        // Update the markers array with the processed data
        setMarkers(processedMarkers);
      } catch (error) {
        console.error('Error fetching nearby places:', error);
      }
    };

    fetchNearbyPlaces();
  }, []);

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100vh' }}
        zoom={10}
        center={{ lat: 0, lng: 0 }}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position}>
            <InfoWindow>
              <div>
                <h3>{marker.name}</h3>
                <p>{marker.address}</p>
              </div>
            </InfoWindow>
          </Marker>
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
