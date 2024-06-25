import React from 'react'

function Input({ text, logo }) {

    const handleKey = (e) => {
        if (e.key === "Enter") {
            console.log("Enter key pressed");
        }
    }

    return (
        <>
            <label htmlFor="">{text}</label>
            <div className='bg-white flex border-2 border-solid border-gray-400 rounded-md'>
                {
                    text == "Destination" || text == "Stop" ?
                        <img className='ml-2' src={logo} alt="" /> :
                        <img className='ml-2'  src={logo} alt="" />
                }
                <input className='focus:outline-none ml-2 h-8 w-2/4' onKeyDown={handleKey} type="text" name="" id="" />
            </div>
        </>
    )
}

export default Input