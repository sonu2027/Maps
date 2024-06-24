import React from 'react'
import gravitiLogo from "../assets/gravitiLogo.svg"

function Navbar() {
  return (
    <div className='bg-white hidden md:block'>
      <img className='pl-10 py-1' src={gravitiLogo} alt="Graviti Logo" />
    </div>
  )
}

// background: #F4F8FA;

export default Navbar