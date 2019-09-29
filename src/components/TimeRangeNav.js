import './TimeRangeNav.css'

import React from 'react'

import TimeButton from './TimeButton'

import { options, labels } from '../constants/timeRange'

const TimeRangeNav = () => {

    const buttonList = options.map(option => <TimeButton option={option}>{labels[option]}</TimeButton>)
    
    return (
        <div className='time-range-nav'>
            {buttonList}
        </div>
    )
}

export default TimeRangeNav