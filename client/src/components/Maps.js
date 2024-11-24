// // // // // // Maps.js
// // // // // import React, { useEffect, useState } from 'react';
// // // // // import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// // // // // import L from 'leaflet';
// // // // // import 'leaflet/dist/leaflet.css';
// // // // // import '../App.css'; // Ensure App.css has the Leaflet styles if not in index.html

// // // // // // Fixes the issue with default marker icons not displaying
// // // // // delete L.Icon.Default.prototype._getIconUrl;
// // // // // L.Icon.Default.mergeOptions({
// // // // //   iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
// // // // //   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
// // // // //   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
// // // // // });

// // // // // function Maps() {
// // // // //   const [hospitals, setHospitals] = useState([]);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState(null);

// // // // //   useEffect(() => {
// // // // //     fetch('http://127.0.0.1:8000/api/hospital-view/') // API for fetching hospitals
// // // // //       .then(response => {
// // // // //         if (!response.ok) {
// // // // //           throw new Error('Network response was not ok');
// // // // //         }
// // // // //         return response.json();
// // // // //       })
// // // // //       .then(data => {
// // // // //         console.log(data);
// // // // //         setHospitals(data);
// // // // //         setLoading(false);
// // // // //       })
// // // // //       .catch(error => {
// // // // //         setError(error);
// // // // //         setLoading(false);
// // // // //       });
// // // // //   }, []);

// // // // //   if (loading) {
// // // // //     return <div>Loading map...</div>;
// // // // //   }

// // // // //   if (error) {
// // // // //     return <div>Error: {error.message}</div>;
// // // // //   }

// // // // //   return (
// // // // //     <div className="map-container">
// // // // //       <h1>Hospitals Map</h1>
// // // // //       <MapContainer center={[28.6139, 77.209]} zoom={12} className="leaflet-container">
// // // // //         <TileLayer
// // // // //           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// // // // //           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// // // // //         />
// // // // //         {hospitals.map(hospital => (
// // // // //           <Marker
// // // // //             key={hospital.hospital_id}
// // // // //             position={[hospital.latitude, hospital.longitude]} // Ensure your API provides latitude & longitude
// // // // //           >
// // // // //             <Popup>
// // // // //               <strong>{hospital.name}</strong>
// // // // //               <p>{hospital.description}</p>
// // // // //               <p><strong>Category:</strong> {hospital.category}</p>
// // // // //               <p><strong>Location:</strong> {hospital.location}</p>
// // // // //             </Popup>
// // // // //           </Marker>
// // // // //         ))}
// // // // //       </MapContainer>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Maps;

// // // // import React, { useEffect, useState } from 'react';
// // // // import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// // // // import L from 'leaflet';
// // // // import 'leaflet/dist/leaflet.css';
// // // // import 'leaflet-routing-machine';
// // // // import '../App.css';

// // // // // Fixes the issue with default marker icons not displaying
// // // // delete L.Icon.Default.prototype._getIconUrl;
// // // // L.Icon.Default.mergeOptions({
// // // //   iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
// // // //   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
// // // //   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
// // // // });

// // // // // Custom red marker for user location
// // // // const userIcon = new L.Icon({
// // // //   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-red.png',
// // // //   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
// // // //   iconSize: [25, 41],
// // // //   iconAnchor: [12, 41],
// // // // });

// // // // function Maps() {
// // // //   const [hospitals, setHospitals] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);
// // // //   const [userLocation, setUserLocation] = useState(null); // Store user's location
// // // //   const [map, setMap] = useState(null); // For routing

// // // //   useEffect(() => {
// // // //     // Fetch hospitals
// // // //     fetch('http://127.0.0.1:8000/api/hospital-view/') // API for fetching hospitals
// // // //       .then(response => {
// // // //         if (!response.ok) {
// // // //           throw new Error('Network response was not ok');
// // // //         }
// // // //         return response.json();
// // // //       })
// // // //       .then(data => {
// // // //         setHospitals(data);
// // // //         setLoading(false);
// // // //       })
// // // //       .catch(error => {
// // // //         setError(error);
// // // //         setLoading(false);
// // // //       });

// // // //     // Get user location
// // // //     navigator.geolocation.getCurrentPosition(
// // // //       position => {
// // // //         setUserLocation([position.coords.latitude, position.coords.longitude]);
// // // //       },
// // // //       error => {
// // // //         console.error('Error getting user location:', error);
// // // //       }
// // // //     );
// // // //   }, []);

// // // //   // Function to add routing
// // // //   const addRouting = (hospital) => {
// // // //     if (map && userLocation) {
// // // //       const routingControl = L.Routing.control({
// // // //         waypoints: [
// // // //           L.latLng(userLocation),
// // // //           L.latLng(hospital.latitude, hospital.longitude),
// // // //         ],
// // // //         routeWhileDragging: true,
// // // //       }).addTo(map);
      
// // // //       return routingControl;
// // // //     }
// // // //   };

// // // //   if (loading) {
// // // //     return <div>Loading map...</div>;
// // // //   }

// // // //   if (error) {
// // // //     return <div>Error: {error.message}</div>;
// // // //   }

// // // //   return (
// // // //     <div className="map-container">
// // // //       <h1>Hospitals Map</h1>
// // // //       <MapContainer
// // // //         center={userLocation || [28.6139, 77.209]}
// // // //         zoom={12}
// // // //         className="leaflet-container"
// // // //         whenCreated={setMap} // Store map instance
// // // //       >
// // // //         <TileLayer
// // // //           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// // // //           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// // // //         />
// // // //         {/* User Location Marker */}
// // // //         {userLocation && (
// // // //           <Marker position={userLocation} icon={userIcon}>
// // // //             <Popup>You are here</Popup>
// // // //           </Marker>
// // // //         )}
// // // //         {/* Hospital Markers */}
// // // //         {hospitals.map(hospital => (
// // // //           <Marker
// // // //             key={hospital.hospital_id}
// // // //             position={[hospital.latitude, hospital.longitude]} // Ensure your API provides latitude & longitude
// // // //           >
// // // //             <Popup>
// // // //               <strong>{hospital.name}</strong>
// // // //               <p>{hospital.description}</p>
// // // //               <p><strong>Category:</strong> {hospital.category}</p>
// // // //               <p><strong>Location:</strong> {hospital.location}</p>
// // // //               <button onClick={() => addRouting(hospital)}>Get Directions</button>
// // // //             </Popup>
// // // //           </Marker>
// // // //         ))}
// // // //       </MapContainer>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Maps;



// // // import React, { useEffect, useState } from 'react';
// // // import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// // // import L from 'leaflet';
// // // import 'leaflet/dist/leaflet.css';
// // // import 'leaflet-routing-machine';
// // // import '../App.css';

// // // // Fixes the issue with default marker icons not displaying
// // // delete L.Icon.Default.prototype._getIconUrl;
// // // L.Icon.Default.mergeOptions({
// // //   iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
// // //   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
// // //   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
// // // });

// // // const userIcon = new L.Icon({
// // //   iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Map_pin_icon_red.svg', // Red map pin icon
// // //   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
// // //   iconSize: [25, 41],  // Size of the marker
// // //   iconAnchor: [12, 41], // Anchor point of the marker
// // //   popupAnchor: [1, -34], // Popup positioning
// // // });



// // // function Maps() {
// // //   const [hospitals, setHospitals] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [userLocation, setUserLocation] = useState(null); // Store user's location
// // //   const [map, setMap] = useState(null); // Store map instance
// // //   const [routingControl, setRoutingControl] = useState(null); // Store routing control to clear previous routes

// // //   useEffect(() => {
// // //     // Fetch hospitals data from API
// // //     fetch('http://127.0.0.1:8000/api/hospital-view/')
// // //       .then(response => {
// // //         if (!response.ok) {
// // //           throw new Error('Network response was not ok');
// // //         }
// // //         return response.json();
// // //       })
// // //       .then(data => {
// // //         setHospitals(data);
// // //         setLoading(false);
// // //       })
// // //       .catch(error => {
// // //         setError(error);
// // //         setLoading(false);
// // //       });

// // //     // Get user location
// // //     navigator.geolocation.getCurrentPosition(
// // //       position => {
// // //         setUserLocation([position.coords.latitude, position.coords.longitude]);
// // //       },
// // //       error => {
// // //         console.error('Error getting user location:', error);
// // //       }
// // //     );
// // //   }, []);

// // //   // Function to add routing control (get directions)
// // //   const addRouting = (hospital) => {
// // //     if (map && userLocation) {
// // //       if (routingControl) {
// // //         map.removeControl(routingControl); // Remove previous route
// // //       }

// // //       const newRoutingControl = L.Routing.control({
// // //         waypoints: [
// // //           L.latLng(userLocation),
// // //           L.latLng(hospital.latitude, hospital.longitude),
// // //         ],
// // //         routeWhileDragging: true,
// // //       }).addTo(map);
// // //       setRoutingControl(newRoutingControl); // Store the new routing control
// // //     }
// // //   };

// // //   if (loading) {
// // //     return <div>Loading map...</div>;
// // //   }

// // //   if (error) {
// // //     return <div>Error: {error.message}</div>;
// // //   }

// // //   return (
// // //     <div className="map-container">
// // //       <h1>Hospitals Map</h1>
// // //       <MapContainer
// // //         center={userLocation || [28.6139, 77.209]} // Default to some coordinates if location not available
// // //         zoom={12}
// // //         className="leaflet-container"
// // //         whenCreated={setMap} // Set the map instance
// // //       >
// // //         <TileLayer
// // //           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// // //           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// // //         />
// // //         {/* User Location Marker */}
// // //         {userLocation && (
// // //           <Marker position={userLocation} icon={userIcon}>
// // //             <Popup>You are here</Popup>
// // //           </Marker>
// // //         )}
// // //         {/* Hospital Markers */}
// // //         {hospitals.map(hospital => (
// // //           <Marker
// // //             key={hospital.hospital_id}
// // //             position={[hospital.latitude, hospital.longitude]} // Ensure API provides lat/lng
// // //           >
// // //             <Popup>
// // //               <strong>{hospital.name}</strong>
// // //               <p>{hospital.description}</p>
// // //               <p><strong>Category:</strong> {hospital.category}</p>
// // //               <p><strong>Location:</strong> {hospital.location}</p>
// // //               <button onClick={() => addRouting(hospital)}>Get Directions</button>
// // //             </Popup>
// // //           </Marker>
// // //         ))}
// // //       </MapContainer>
// // //     </div>
// // //   );
// // // }

// // // export default Maps;



// // import React, { useEffect, useState } from 'react';
// // import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// // import L from 'leaflet';
// // import 'leaflet/dist/leaflet.css';
// // import 'leaflet-routing-machine';
// // import '../App.css';

// // // Fixes the issue with default marker icons not displaying
// // delete L.Icon.Default.prototype._getIconUrl;
// // L.Icon.Default.mergeOptions({
// //   iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
// //   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
// //   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
// // });

// // // Custom red marker for user location
// // const userIcon = new L.Icon({
// //   iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Map_pin_icon_red.svg', // Red map pin icon
// //   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
// //   iconSize: [25, 41],  // Size of the marker
// //   iconAnchor: [12, 41], // Anchor point of the marker
// //   popupAnchor: [1, -34], // Popup positioning
// // });

// // function Maps() {
// //   const [hospitals, setHospitals] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [userLocation, setUserLocation] = useState(null); // Store user's location
// //   const [map, setMap] = useState(null); // Store map instance
// //   const [routingControl, setRoutingControl] = useState(null); // Store routing control to clear previous routes

// //   useEffect(() => {
// //     // Fetch hospitals data from API
// //     fetch('http://127.0.0.1:8000/api/hospital-view/')
// //       .then(response => {
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         return response.json();
// //       })
// //       .then(data => {
// //         setHospitals(data);
// //         setLoading(false);
// //       })
// //       .catch(error => {
// //         setError(error);
// //         setLoading(false);
// //       });

// //     // Get user location
// //     navigator.geolocation.getCurrentPosition(
// //       position => {
// //         setUserLocation([position.coords.latitude, position.coords.longitude]);
// //       },
// //       error => {
// //         console.error('Error getting user location:', error);
// //       }
// //     );
// //   }, []);

// //   // Function to add routing control (get directions)
// //   const addRouting = (hospital) => {
// //     if (map && userLocation) {
// //       if (routingControl) {
// //         map.removeControl(routingControl); // Remove previous route
// //       }

// //       const newRoutingControl = L.Routing.control({
// //         waypoints: [
// //           L.latLng(userLocation),
// //           L.latLng(hospital.latitude, hospital.longitude),
// //         ],
// //         routeWhileDragging: true,
// //       }).addTo(map);
// //       setRoutingControl(newRoutingControl); // Store the new routing control
// //     }
// //   };

// //   if (loading) {
// //     return <div>Loading map...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error.message}</div>;
// //   }

// //   return (
// //     <div className="map-container">
// //       <h1>Hospitals Map</h1>
// //       <MapContainer
// //         center={userLocation || [28.6139, 77.209]} // Default to some coordinates if location not available
// //         zoom={12}
// //         className="leaflet-container"
// //         whenCreated={setMap} // Set the map instance
// //       >
// //         <TileLayer
// //           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //         />
// //         {/* User Location Marker */}
// //         {userLocation && (
// //           <Marker position={userLocation} icon={userIcon}>
// //             <Popup>You are here</Popup>
// //           </Marker>
// //         )}
// //         {/* Hospital Markers */}
// //         {hospitals.map(hospital => (
// //           <Marker
// //             key={hospital.hospital_id}
// //             position={[hospital.latitude, hospital.longitude]} // Ensure API provides lat/lng
// //           >
// //             <Popup>
// //               <strong>{hospital.name}</strong>
// //               <p>{hospital.description}</p>
// //               <p><strong>Category:</strong> {hospital.category}</p>
// //               <p><strong>Location:</strong> {hospital.location}</p>
// //               <button onClick={() => addRouting(hospital)}>Get Directions</button>
// //             </Popup>
// //           </Marker>
// //         ))}
// //       </MapContainer>
// //     </div>
// //   );
// // }

// // export default Maps;


// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import 'leaflet-routing-machine';
// import '../App.css';

// // Fix for default marker icons not displaying
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
//   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
// });

// // Custom red marker for the user's location
// const userIcon = new L.Icon({
//   iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Map_pin_icon_red.svg', // Red pin
//   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
// });

// function Maps() {
//   const [hospitals, setHospitals] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [userLocation, setUserLocation] = useState(null); // Store user's location
//   const [map, setMap] = useState(null); // For routing control
  

//   // Fetch hospitals and user location
//   useEffect(() => {
//     // Fetch hospital data
//     fetch('http://127.0.0.1:8000/api/hospital-view/')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setHospitals(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });

//     // Get user location
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setUserLocation([position.coords.latitude, position.coords.longitude]);
//       },
//       (error) => {
//         console.error('Error getting user location:', error);
//       }
//     );
//   }, []);

//   // Function to add routing
//   const addRouting = (hospital) => {
//     if (map && userLocation) {
//       const routingControl = L.Routing.control({
//         waypoints: [
//           L.latLng(userLocation),
//           L.latLng(hospital.latitude, hospital.longitude),
//         ],
//         routeWhileDragging: true,
//       }).addTo(map);

//       // Store the routing control to remove the previous route if necessary
//       setRoutingControl(routingControl);
//     }
//   };

//   if (loading) {
//     return <div>Loading map...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div className="map-container">
//       <h1>Hospitals Map</h1>
//       <MapContainer
//         center={userLocation || [28.6139, 77.209]} // Default center if location is not yet available
//         zoom={12}
//         className="leaflet-container"
//         whenCreated={setMap} // Store map instance
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {/* User Location Marker */}
//         {userLocation && (
//           <Marker position={userLocation} icon={userIcon}>
//             <Popup>You are here</Popup>
//           </Marker>
//         )}
//         {/* Hospital Markers */}
//         {hospitals.map((hospital) => (
//           <Marker
//             key={hospital.hospital_id}
//             position={[hospital.latitude, hospital.longitude]}
//           >
//             <Popup>
//               <strong>{hospital.name}</strong>
//               <p>{hospital.description}</p>
//               <p><strong>Category:</strong> {hospital.category}</p>
//               <p><strong>Location:</strong> {hospital.location}</p>
//               <button onClick={() => addRouting(hospital)}>Get Directions</button>
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// }

// export default Maps;

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import '../App.css';

// Fix for default marker icons not displaying
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Custom red marker for the user's location
const userIcon = new L.Icon({
  iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Map_pin_icon_red.svg', // Red pin
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

function Maps() {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userLocation, setUserLocation] = useState(null); // Store user's location
  const [map, setMap] = useState(null); // For routing control

  // Fetch hospitals and user location
  useEffect(() => {
    // Fetch hospital data
    fetch('http://127.0.0.1:8000/api/hospital-view/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setHospitals(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });

    // Get user location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  }, []);

  // Function to create Google Maps URL for directions
  const getGoogleMapsUrl = (hospital) => {
    if (userLocation) {
      // Create the Google Maps URL for directions
      const origin = `${userLocation[0]},${userLocation[1]}`;
      const destination = `${hospital.latitude},${hospital.longitude}`;
      const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`;

      // Open the URL in a new tab
      window.open(googleMapsUrl, '_blank');
    }
  };

  // Zoom to user's location
  const zoomToUserLocation = () => {
    if (map && userLocation) {
      map.setView(userLocation, 14); // Zoom level 14, adjust as needed
    }
  };

  if (loading) {
    return <div>Loading map...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="map-container">
          {/* <h1>Hospitals Map</h1> */}

      {/* Only show the zoom button if user's location is available */}
       {/* {userLocation && (
        <button onClick={zoomToUserLocation} className="zoom-btn">
          Zoom to My Location
        </button>
      )}  */}

      <MapContainer
        center={userLocation || [28.6139, 77.209]} // Default center if location is not yet available
        zoom={12}
        className="leaflet-container"
        whenCreated={setMap} // Store map instance
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* User Location Marker */}
        {userLocation && (
          <Marker position={userLocation} icon={userIcon}>
            <Popup>You are here</Popup>
          </Marker>
        )}
        {/* Hospital Markers */}
        {hospitals.map((hospital) => (
          <Marker
            key={hospital.hospital_id}
            position={[hospital.latitude, hospital.longitude]}
          >
            <Popup>
              <strong>{hospital.name}</strong>
              <p>{hospital.description}</p>
              <p><strong>Category:</strong> {hospital.category}</p>
              <p><strong>Location:</strong> {hospital.location}</p>
              <button onClick={() => getGoogleMapsUrl(hospital)}>Get Directions</button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Maps;
