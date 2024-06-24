import React from 'react'

function Input({ text, logo }) {

    const handleKey=(e)=>{
        if(e.key==="Enter"){
            console.log("Enter key pressed");
        }
    }

    return (
        <div>
            <label htmlFor="">{text}</label>
            <div className='bg-white border-2 border-solid border-gray-400 rounded-md flex justify-start items-center mt-1 w-96 sm:w-40 md:w-48 lg:w-60 px-2'>
                {
                    text == "Destination" || text=="Stop" ?
                        <img className='rounded-full ml-2' src={logo} alt="" /> :
                        <img className='border-2 border-solid border-black rounded-full ml-2' src={logo} alt="" />
                }
                <input onKeyDown={handleKey} className='focus:outline-none h-10 ml-2 font-bold sm:w-full' type="text" name="" id="" />
            </div>
        </div>
    )
}

export default Input