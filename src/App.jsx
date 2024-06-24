// import React, { useEffect, useRef, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
// import "./App.css";

// function App() {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     if (!mapRef.current) {
//       // Initialize the map only if it hasn't been initialized yet
//       mapRef.current = L.map('map').setView([22.5744, 88.3629], 13);
//       console.log("mapref.current: ", mapRef.current);

//       // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       // }).addTo(mapRef.current);
//       L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 19,
//         attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//       }).addTo(mapRef.current);

//       // var marker = L.marker([22.5744, 88.3629]).addTo(mapRef.current);

//       const circle = L.circle([22.5744, 88.3629], {
//         color: 'red',
//         fillColor: '#f03',
//         fillOpacity: 0.5,
//         radius: 500
//       }).addTo(mapRef.current);

//       const polygon = L.polygon([
//         [22.5744, 88.3629],
//         [51.503, -0.06],
//         [51.51, -0.047]
//       ]).addTo(mapRef.current);

//       // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
//       circle.bindPopup("I am a circle.");
//       polygon.bindPopup("I am a polygon.");
//     }
//   }, []); // Empty dependency array ensures this runs once after the component mounts

//   const onMapClick = (e) => {
//     console.log("event: ", e);
//     const popup = L.popup()
//     popup
//       .setLatLng(e.latlng)
//       .setContent("You clicked the map at " + e.latlng)
//       .openOn(mapRef.current);

//     const marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mapRef.current)

//   };

//   useEffect(() => {
//     if (mapRef.current) {
//       mapRef.current.on('click', onMapClick); // Add click event listener

//     }
//   }, []);

//   return (
//     <div>
//       <div>App</div>
//       <div id="map" style={{ height: '500px', width: '100%' }}></div>
//     </div>
//   );
// }

// export default App;



// import React, { useRef, useEffect } from 'react';
// import { MapContainer, TileLayer } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
// import 'leaflet-control-geocoder';

// import './App.css';

// function App() {
//   const mapRef = useRef(null);
//   const geocoderRef = useRef(null);
//   const inputRef = useRef(null);

//   useEffect(() => {
//     if (!mapRef.current) {
//       mapRef.current = L.map('map').setView([51.505, -0.09], 13);

//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; OpenStreetMap contributors'
//       }).addTo(mapRef.current);

//       // Initialize geocoder control
//       geocoderRef.current = L.Control.geocoder({
//         defaultMarkGeocode: false,
//         collapsed: false,
//         placeholder: 'Enter an address',
//       }).addTo(mapRef.current);
//     }

//     // Listen for geocoding result and update map
//     geocoderRef.current.on('markgeocode', function (e) {
//       const { center } = e.geocode.geometry;
//       mapRef.current.setView([center.lat, center.lng], 13);
//     });
//   }, []);


//   const handleGeocode = () => {
//     const inputValue = inputRef.current.value;
//     if (inputValue && geocoderRef.current) {
//       geocoderRef.current.geocode(inputValue);
//     }
//   };



//   return (
//     <div className="App">
//       <h1>Leaflet Geocoding Example</h1>
//       <div className="input-container">
//         <input ref={inputRef} type="text" placeholder="Enter location" />
//         <button onClick={handleGeocode}>Search</button>
//       </div>
//       <div id="map" style={{ height: '500px' }}></div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react'
import Navbar from './component/Navbar.jsx'
import Title from './component/Title.jsx'
import Box from './component/Box.jsx'

function App() {

  const [distance, setDistance] = useState("")
  const [origin, setOrigin] = useState("")
  const [dest, setDest] = useState("")

  return (
    <div className='bg-blue-50 h-full pb-4'>
      <Navbar />
      <Title />
      <Box distance={distance} origin={origin} dest={dest} setDistance={setDistance} setOrigin={setOrigin} setDest={setDest} />
    </div>
  )
}

export default App
