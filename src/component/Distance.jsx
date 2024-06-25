import React from 'react'

function Distance({ distance, origin, dest, setDistance, setOrigin, setDest }) {
    return (
        <div className='border-2 border-solid border-gray-400 rounded-md'>
            <div className='flex justify-between items-center py-3 px-2 bg-white'>
                <p className='font-medium text-xl'>Distance</p>
                <p className='font-medium text-2xl '>{distance?(distance/1000).toFixed(2):""} kms</p>
            </div>
            <p className='px-2 py-4'>The distance between <b>{origin}</b> and <b>{dest}</b> via selected route is <b>{distance?(distance/1000).toFixed(2):""} kms</b></p>
        </div>
    )
}

export default Distance