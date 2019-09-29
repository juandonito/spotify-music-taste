import './TimeRangeNav.css'
import './TimeButton.css'

import React from 'react'

import { options, labels } from '../constants/timeRange'

const TimeRangeNav = ({ handleTimeRangeChange, currentTimeRange}) => {

    const handleClick = e => {
        handleTimeRangeChange(e.target.value)
    }

    const buttonList = options.map(option => 
        <button 
            key={labels[option]}
            value={option}
            className={option === currentTimeRange ? 'time-button active' : 'time-button'}
            onClick={e => handleClick(e)}
        >
            {labels[option]}
        </button>
    )
    
    return (
        <div className='time-range-nav'>
            {buttonList}
        </div>
    )
}

export default TimeRangeNav