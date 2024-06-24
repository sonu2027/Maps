import React from 'react'
import Map from './Map.jsx'
import LeftSide from './LeftSide.jsx'

function Box({ distance, origin, dest, setDistance, setOrigin, setDest }) {
    return (
        <div className='border-blue-400 border-solid border-2 ml-2 mr-2 sm:ml-10 sm:mr-5 md:ml-16 md:mr-12 lg:ml-28 lg:mr-20 flex flex-col-reverse md:flex-row md:justify-between pt-2 md:mt-6 justify-center items-center'>
            <LeftSide distance={distance} origin={origin} dest={dest} setDistance={setDistance} setOrigin={setOrigin} setDest={setDest}/>
            <Map distance={distance} origin={origin} dest={dest} setDistance={setDistance} setOrigin={setOrigin} setDest={setDest}/>
        </div>
    )
}

export default Box