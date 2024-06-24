import React from 'react'

function Distance({ distance, origin, dest, setDistance, setOrigin, setDest }) {
    return (
        <div className='border-2 border-solid border-gray-400 rounded-md mt-14 sm:mt-1 md:mt-2 lg:mt-8'>
            <div className='flex justify-between items-center py-2 md:py-3 px-1 lg:py-4 lg:px-2 bg-white'>
                <p className='font-medium text-xl md:text-xl lg:text-2xl'>Distance</p>
                <p className='font-medium text-2xl md:text-2xl lg:text-3xl'>{distance?(distance/1000).toFixed(2):""} kms</p>
            </div>
            <p className='lg:py-4 lg:px-2 md:py-3 px-1 py-2'>The distance between <b>{origin}</b> and <b>{dest}</b> via selected route is <b>{distance?(distance/1000).toFixed(2):""} kms</b></p>
        </div>
    )
}

export default Distance