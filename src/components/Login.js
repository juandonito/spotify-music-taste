import React from 'react'

import { spotifyAuth } from '../api/spotify'

import './Login.css'

const Login = () => {

    const handleClick = () => {
        spotifyAuth()
    }

    return (
        <div className='login'>
            <button onClick={() => handleClick()}>login with spotify</button>
        </div>
    )
}

export default Login