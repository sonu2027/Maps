import React from 'react'
import Input from './Input.jsx'
import Stop from './Stop.jsx'
import originLogo from "../assets/originLogo.svg"
import destinationLogo from "../assets/destinationLogo.svg"
import Distance from './Distance.jsx'
import Button from './Button.jsx'

function LeftSide({ distance, origin, dest, setDistance, setOrigin, setDest }) {
  return (
    <div >
      <div >
        <div className='fixed top-60 sm:top-40 sm:left-14 w-screen px-2 sm:w-2/6'>
          <Input text="Origin" logo={originLogo} />
        </div>
        <div className='fixed top-80 sm:top-60 sm:left-14 w-screen px-2 sm:w-2/6'>
          <Input text="Destination" logo={destinationLogo} />
        </div>
        <div className='fixed top-96 sm:top-72 sm:left-14 mt-24 w-screen px-2 sm:w-2/5'>
          <Distance distance={distance} origin={origin} dest={dest} setDistance={setDistance} setOrigin={setOrigin} setDest={setDest} />
        </div>
      </div>
    </div>
  )
}

export default LeftSide