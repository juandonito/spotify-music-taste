import './TimeRangeNav.css'

import React from 'react'

import TimeButton from './TimeButton'

const TimeRangeNav = () => {
    return (
        <div className='time-range-nav'>
            <TimeButton>All time</TimeButton>
            <TimeButton>Last 6 months</TimeButton>
            <TimeButton>Last month</TimeButton>
        </div>
    )
}

export default TimeRangeNav