import React, { useState } from 'react'
import { MdAddCircleOutline } from "react-icons/md";
import Input from './Input.jsx';
import stopLogo from "../assets/stopLogo.svg"

function Stop() {

    const [noOfInput, setNoOfInput] = useState([""])

    const handleNoOfInput = () => {
        setNoOfInput((s) => [...s, ""])
    }

    return (
        <div className='flex'>
            <div>
                {
                    noOfInput.map((e, i) => <Input key={i} text="Stop" logo={stopLogo} />)
                }
                <div onClick={handleNoOfInput} className='flex justify-end items-center gap-x-2'>
                    <MdAddCircleOutline />
                    <p>Add more stops</p>
                </div>
            </div>
        </div>
    )
}

export default Stop