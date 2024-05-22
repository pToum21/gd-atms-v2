import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Container, Typography } from '@mui/material';

const locations = [
    {
        id: 1,
        name: 'Corkrunner Wine and Spirits, Los Angeles, CA',
        description: 'Status: Normal',
        position: { lat: 34.052235, lng: -118.243683 } // Coordinates for Los Angeles, CA
    },
    {
        id: 2,
        name: 'College Park, Maryland',
        description: ' Status: Normal',
        position: { lat: 38.9897, lng: -76.9378 } // Coordinates for College Park, Maryland
    },
    {
        id: 3,
        name: 'Big Bear, California',
        description: 'Status: Normal',
        position: { lat: 34.2439, lng: -116.9114 } // Coordinates for Big Bear, California
    },
    {
        id: 4,
        name: 'Olney, Maryland',
        description: 'Status: Normal',
        position: { lat: 39.1532, lng: -77.0565 } // Coordinates for Olney, Maryland
    }
];

const TerminalNews = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleMarkerClick = (location) => {
        setSelectedLocation(location);
    };

    const handleCloseClick = () => {
        setSelectedLocation(null);
    };

    return (
        <Container className="terminal-news" style={{ height: '100vh', padding: '0' }}>
            <Typography variant="h1">News</Typography>
            <div style={{ height: 'calc(100% - 64px)', width: '100%' }}>
                <LoadScript googleMapsApiKey="">
                    <GoogleMap
                        mapContainerStyle={{ height: '100%', width: '100%' }}
                        center={locations[0].position}
                        zoom={4}
                    >
                        {locations.map((location) => (
                            <Marker
                                key={location.id}
                                position={location.position}
                                onClick={() => handleMarkerClick(location)}
                            />
                        ))}
                        {selectedLocation && (
                            <InfoWindow
                                position={selectedLocation.position}
                                onCloseClick={handleCloseClick}
                            >
                                <div>
                                    <Typography variant="h6">{selectedLocation.name}</Typography>
                                    <Typography variant="body1">{selectedLocation.description}</Typography>
                                </div>
                            </InfoWindow>
                        )}
                    </GoogleMap>
                </LoadScript>
            </div>
        </Container>
    );
};

export default TerminalNews;
