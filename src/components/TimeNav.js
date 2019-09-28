import './TimeNav.css'

import React from 'react'

import TimeButton from './TimeButton'

const TimeNav = () => {
    return (
        <div className='time-nav'>
            <TimeButton>All time</TimeButton>
            <TimeButton>Last 6 months</TimeButton>
            <TimeButton>Last month</TimeButton>
        </div>
    )
}

export default TimeNav