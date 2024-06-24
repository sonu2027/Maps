import React, { useRef, useEffect, useState } from 'react'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';

import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import "./style.css"
import Button from './Button.jsx';

function Map({ distance, origin, dest, setDistance, setOrigin, setDest }) {

    let mapRef = useRef(null);
    let loc1 = useRef(null);
    let loc2 = useRef(null)

    const getLocation = async () => {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                let location = []
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        location = [position.coords.latitude, position.coords.longitude]
                        console.log("Location is: ", location);
                        resolve(location)
                    },
                    (err) => {
                        reject({ error: "error" })
                    }
                );
            } else {
                throw error
            }
        })
    }

    const showMap = (location) => {
        mapRef.current = L.map('map').setView(location, 200);
        console.log("mapref.current: ", mapRef.current
        );

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 9,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(mapRef.current);
    }

    const markCurrentLocation = (location) => {
        let marker = L.marker(location).addTo(mapRef.current);
        marker.bindPopup("<b>Current location</b>").openPopup();
    }

    const showRoute = async () => {
        console.log("I am ");
        const route = L.Routing.control({
            waypoints: [
                L.latLng(
                    loc1.current._geocodeMarker._latlng.lat,
                    loc1.current._geocodeMarker._latlng.lng
                ),
                L.latLng(
                    loc2.current._geocodeMarker._latlng.lat,
                    loc2.current._geocodeMarker._latlng.lng
                ),
            ],
        }).addTo(mapRef.current);
        console.log("distance: ", route)

        const remove1 = document.getElementsByClassName("leaflet-routing-alternatives-container")
        console.log("Total remove si: ", remove1);
        const remove2 = document.getElementsByClassName("leaflet-routing-container")
        remove2[0].style.display = "none"
        console.log("remove2 is: ", remove2);

        for (let i = 0; i < remove2.length; i++) {
            remove2[i].style.display = "none"
            remove2[i].style.height = "0"
            remove2[i].style.width = "0"
        }

        for (let i = 0; i < remove1.length; i++) {
            remove1[i].style.display = "none"
            remove1[i].style.height = "0"
            remove1[i].style.width = "0"
        }

        setTimeout(() => {
            if (route._selectedRoute && route._selectedRoute.summary) {
                setDistance(route._selectedRoute.summary.totalDistance)
            } else {
                console.log("route not found");
            }
        }, 3000)
    }

    const setLoc1 = () => {
        loc1.current = L.Control.geocoder().addTo(mapRef.current);
        console.log(loc1._lastGeocode);
    }

    const setLoc2 = () => {
        loc2.current = L.Control.geocoder().addTo(mapRef.current);
        console.log(loc2._lastGeocode);
    }

    const firedLoc1 = () => {

        loc1.current.on("markgeocode", (e) => {
            console.log("geocode mark: ", e);
            setOrigin(e.target._lastGeocode)
            return e.target._lastGeocode;
        })
    }

    const firedLoc2 = () => {

        loc2.current.on("markgeocode", (e) => {
            console.log("geocode mark: ", e);
            setDest(e.target._lastGeocode)
            return e.target._lastGeocode;
        });
    }

    const setStyle = () => {

        const inputTag = document.getElementsByClassName("leaflet-bar leaflet-control-geocoder leaflet-control")
        const geocoderIcon = document.getElementsByClassName("leaflet-control-geocoder-icon")
        geocoderIcon[0].style.display = "none"
        geocoderIcon[1].style.display = "none"

        const mediaQuery = window.matchMedia("(max-width: 1024px)");
        const mediaQuery2 = window.matchMedia("(max-width: 768px)");
        const mediaQuery3 = window.matchMedia("(max-width: 640px)");

        function handleMediaQueryChange(e) {
            console.log("e is: ", e);
            if (e.matches) {
                // The viewport is 600px or less
                console.log("Media Query Matched! Viewport is 600px or less");
                inputTag[0].style.position = "fixed"
                inputTag[0].style.left = "6.5rem"
                inputTag[0].style.marginTop = "2rem"
                inputTag[0].style.width = "9rem"
                // inputTag[0].style.border="none"

                inputTag[1].style.position = "fixed"
                inputTag[1].style.left = "6.5rem"
                inputTag[1].style.marginTop = "8rem"
                inputTag[1].style.width = "9rem"
            } else {
                // The viewport is more than 600px
                console.log("Media Query Not Matched! Viewport is more than 600px");
                inputTag[0].style.position = "fixed"
                inputTag[0].style.left = "9rem"
                inputTag[0].style.marginTop = "2rem"
                inputTag[0].style.width = "12.5rem"
                // inputTag[0].style.border="none"

                inputTag[1].style.position = "fixed"
                inputTag[1].style.left = "9rem"
                inputTag[1].style.marginTop = "8rem"
                inputTag[1].style.width = "12.5rem"
                // inputTag[1].style.border="none"
            }
        }

        function handleMediaQueryChange2(e) {
            console.log("e is: ", e);
            if (e.matches) {
                // The viewport is 600px or less
                console.log("Media Query Matched! Viewport is 600px or less");
                inputTag[0].style.position = "fixed"
                inputTag[0].style.left = "4.6rem"
                inputTag[0].style.marginTop = "2rem"
                inputTag[0].style.width = "7.5rem"
                // inputTag[0].style.border="none"

                inputTag[1].style.position = "fixed"
                inputTag[1].style.left = "4.6rem"
                inputTag[1].style.marginTop = "8rem"
                inputTag[1].style.width = "7.5rem"
            } 
        }

        function handleMediaQueryChange3(e) {
            console.log("e is: ", e);
            if (e.matches) {
                // The viewport is 600px or less
                console.log("Media Query Matched! Viewport is 600px or less");
                inputTag[0].style.position = "fixed"
                inputTag[0].style.left = "8.5rem"
                inputTag[0].style.marginTop = "18.5rem"
                inputTag[0].style.width = "18rem"
                // inputTag[0].style.border="none"

                inputTag[1].style.position = "fixed"
                inputTag[1].style.left = "4.6rem"
                inputTag[1].style.marginTop = "26rem"
                inputTag[1].style.width = "15rem"
            } 
        }

        // Initial check
        handleMediaQueryChange(mediaQuery);

        // Listen for changes
        mediaQuery.addEventListener("change", handleMediaQueryChange);
        mediaQuery2.addEventListener("change", handleMediaQueryChange2);
        mediaQuery3.addEventListener("change", handleMediaQueryChange3);
    }

    useEffect(() => {

        getLocation()
            .then((location) => {
                if (!mapRef.current) {

                    showMap(location)

                    setLoc1()
                    setLoc2()

                    markCurrentLocation(location)

                    setStyle()

                    let place1 = firedLoc1()
                    let place2 = firedLoc2()

                }
            })
            .catch(() => {

            })
    }, []); // Empty dependency array ensures this runs once after the component mounts


    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-72 sm:w-72 w-screen h-56 mr-0 border-2 border-solid border-red-500' id="map"></div>
            <div onClick={showRoute} id='sbmtbtn'>
                <Button />
            </div>
        </div>
    )
}

export default Map