import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Test() {

    //use location

    // const location = useLocation()

    //use navigate
    const navigate = useNavigate()


    const data = () => {
        console.log('function called')
        navigate('/', { state: 'lavanya' }) 
    }

    return (
        <div>
            <button onClick={data}>sfgdfg</button>
        </div>
    )
}
