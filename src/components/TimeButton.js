import './TimeButton.css'

import React from 'react'

const TimeButton = ({children}) => {

    return (
        <button className='time-button'>
            {children}
        </button>
    )
}

export default TimeButton