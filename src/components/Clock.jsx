import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Clock() {

    const [clockState, setClockState] = useState()

    useEffect(() => {

        setInterval(() => {
            const date = new Date()
            setClockState(date.toLocaleTimeString())
        })

    }, [])

    return (
        <div className='w-screen h-screen flex justify-center items-center bg-[#242527] text-white text-8xl'>
            <div style={{ textShadow: "0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0)" }}>
                {clockState}
            </div>
        </div>
    )
}
