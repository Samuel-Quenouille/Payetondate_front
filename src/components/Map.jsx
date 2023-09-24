import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import '../map.css';

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const paris = { lng: 2.347, lat: 48.8549 };
    const [zoom] = useState(14);
    maptilersdk.config.apiKey = '6wXmBGnieQc1iU2mA4BW';

    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once
      
        map.current = new maptilersdk.Map({
          container: mapContainer.current,
          style: maptilersdk.MapStyle.STREETS,
          center: [paris.lng, paris.lat],
          zoom: zoom
        });

        new maptilersdk.Marker({color: "#FF0000"})
            .setLngLat([2.347,48.8549])
            .addTo(map.current);
      
    }, [paris.lng, paris.lat, zoom]);

    return (
        <div className="map-wrap center-map">
          <div ref={mapContainer} className="map" />
        </div>
    );
}