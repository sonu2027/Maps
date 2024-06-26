import React from 'react'

function Button({showRoute}) {
  return (
    <button onClick={showRoute} className='bg-blue-600 h-11 w-32 sm:w-24 text-white font-medium rounded-3xl'>Calculate</button>
  )
}

export default Button