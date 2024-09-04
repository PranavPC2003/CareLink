import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

function Maps() {
  const [maps, setMaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/maps/')
      .then(response => response.json())
      .then(data => {
        setMaps(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ height: '100vh' }}>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {maps.map((map, index) => (
          <Marker
            key={index}
            position={[map.latitude, map.longitude]}
            icon={L.icon({
              iconUrl: 'http://example.com/your-icon.png', // Replace with your icon URL
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowUrl: 'http://example.com/your-shadow.png', // Replace with your shadow URL
              shadowSize: [41, 41],
            })}
          >
            <Popup>
              <strong>{map.name}</strong><br />
              {map.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Maps;
