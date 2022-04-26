import React, { useState } from 'react'
import Map, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter'
import "mapbox-gl/dist/mapbox-gl.css"

function RoadMap({ searchResults }) {

    const [selectedLocation, setSelectedLocation] = useState({})
    

    // Transform the search results object into the lat and long obj
    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat,
    }))

    const center = getCenter(coordinates)

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    })
    
    return (
        <Map 
            mapStyle="mapbox://styles/garrettjprince/cl2f7mmbf003715n0q9q5mr5c"
            mapboxAccessToken={process.env.mapbox_key}
            {...viewport}
            onMove={evt => setViewport(evt.viewport)}
        >
            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetRight={-10}
                    >
                        <p
                            role="img"
                            onClick={() => setSelectedLocation(result)}
                            className="cursor-pointer text-2xl animate-bounce"  
                            aria-label="push-pin"  
                        >
                        📌
                        </p>
                    </Marker>

                    {/* popup that shows if we click on marker */}
                    {selectedLocation.lat === result.lat ? (
                        <Popup
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}
                        >
                            {result.title}
                        </Popup>
                    ) : (
                        false
                    )}
                </div>
            ))}

        </Map>

        
    )
}

export default RoadMap
