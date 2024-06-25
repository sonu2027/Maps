import React from 'react'
import Map from './Map.jsx'
import LeftSide from './LeftSide.jsx'

function Box({ distance, origin, dest, setDistance, setOrigin, setDest }) {
    return (
        <div>
            <LeftSide distance={distance} origin={origin} dest={dest} setDistance={setDistance} setOrigin={setOrigin} setDest={setDest}/>
            <Map distance={distance} origin={origin} dest={dest} setDistance={setDistance} setOrigin={setOrigin} setDest={setDest}/>
        </div>
    )
}

export default Box