import React, { useState } from 'react'
import Navbar from './component/Navbar.jsx'
import Title from './component/Title.jsx'
import Box from './component/Box.jsx'

function App() {

  const [distance, setDistance] = useState("")
  const [origin, setOrigin] = useState("")
  const [dest, setDest] = useState("")

  return (
    <div>
      <Navbar />
      <Title />
      <Box distance={distance} origin={origin} dest={dest} setDistance={setDistance} setOrigin={setOrigin} setDest={setDest} />
    </div>
  )
}

export default App
