import React from 'react'
import Input from './Input.jsx'
import Stop from './Stop.jsx'
import originLogo from "../assets/originLogo.svg"
import destinationLogo from "../assets/destinationLogo.svg"
import Distance from './Distance.jsx'
import Button from './Button.jsx'

function LeftSide({ distance, origin, dest, setDistance, setOrigin, setDest }) {
  return (
    <div className='flex'>
      <div className='flex flex-col gap-y-2 sm:gap-y-5'>
        <Input text="Origin" logo={originLogo} />
        {/* <Stop/> */}
        <Input text="Destination" logo={destinationLogo} />
        <Distance distance={distance} origin={origin} dest={dest} setDistance={setDistance} setOrigin={setOrigin} setDest={setDest}/>
      </div>
      {/* <Button distance={distance} origin={origin} dest={dest} setDistance={setDistance} setOrigin={setOrigin} setDest={setDest}/> */}
    </div>
  )
}

export default LeftSide