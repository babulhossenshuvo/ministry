import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default Leaflet icon marker issues in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function InteractiveMap({ lat, lng, popupText }) {
    const position = [lat, lng];

    return (
        <div style={{ height: '300px', width: '100%', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '2px solid var(--color-border)' }}>
            <MapContainer
                center={position}
                zoom={15}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        {popupText}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
