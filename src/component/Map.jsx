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
    const [routes, setRoutes] = useState(null)

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

    const disconnectRoute = () => {
        if (routes) {
            console.log("route started disconnecting");
            mapRef.current.removeControl(routes);
            setRoutes(null);
            setDistance("");
        } else {
            console.log("No route to disconnect.");
        }
    };

    const showRoute = async () => {
        console.log("route is: ", routes);
        if (origin == "" || dest == "") {
            alert("Please, enter both the location")
        }
        else {
            disconnectRoute()
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
            setRoutes(route)
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
                    alert("Route not found, try to search for another location")
                }
            }, 5000)
        }
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

        const mediaQuery2 = window.matchMedia("(max-width: 1800px)");
        const mediaQuery3 = window.matchMedia("(max-width: 640px)");

        function handleMediaQueryChange() {

            if (mediaQuery3.matches) {
                console.log("Media Query Matched! Viewport is 640px or less");

                inputTag[0].style.position = "fixed"
                inputTag[0].style.left = "2.3rem"
                inputTag[0].style.top = "16rem"
                inputTag[0].style.width = "88vw"
                inputTag[0].style.border = "none"
                inputTag[0].style.display = "flex"
                inputTag[0].style.flexDirection = "column"
                inputTag[0].style.justifyContent = "center"
                inputTag[0].style.alignItems = "start"
                inputTag[0].style.zIndex = "1000"

                inputTag[1].style.position = "fixed"
                inputTag[1].style.left = "2.3rem"
                inputTag[1].style.top = "21rem"
                inputTag[1].style.width = "88vw"
                inputTag[1].style.border = "none"
                inputTag[1].style.display = "flex"
                inputTag[1].style.flexDirection = "column"
                inputTag[1].style.justifyContent = "center"
                inputTag[1].style.alignItems = "start"
                inputTag[1].style.zIndex = "999"

            } else if (mediaQuery2.matches) {
                console.log("Media Query Matched! Viewport is 768px or less");

                inputTag[0].style.position = "fixed"
                inputTag[0].style.left = "5.9rem"
                inputTag[0].style.top = "11rem"
                inputTag[0].style.width = "25vw"
                inputTag[0].style.border = "none"
                inputTag[0].style.display = "flex"
                inputTag[0].style.flexDirection = "column"
                inputTag[0].style.justifyContent = "center"
                inputTag[0].style.alignItems = "start"
                inputTag[0].style.zIndex = "1000"

                inputTag[1].style.position = "fixed"
                inputTag[1].style.left = "5.9rem"
                inputTag[1].style.top = "16rem"
                inputTag[1].style.width = "25vw"
                inputTag[1].style.border = "none"
                inputTag[1].style.display = "flex"
                inputTag[1].style.flexDirection = "column"
                inputTag[1].style.justifyContent = "center"
                inputTag[1].style.alignItems = "start"
                inputTag[1].style.zIndex = "999"
            }
        }

        // Initial check
        handleMediaQueryChange();

        mediaQuery2.addEventListener("change", handleMediaQueryChange);
        mediaQuery3.addEventListener("change", handleMediaQueryChange);

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
    }, []);


    return (
        < div>
            <div className='h-56 w-screen sm:w-2/5 sm:h-96 fixed top-0 sm:top-40 sm:right-10' id="map"></div>
            <div className='w-screen fixed top-96 sm:top-52 sm:right-6 mt-5 flex justify-center items-center' onClick={showRoute} id='sbmtbtn'>
                <Button />
            </div>
        </div>
    )
}

export default Map