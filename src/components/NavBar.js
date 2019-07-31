import './NavBar.css'

import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Star } from '../assets/icons/star.svg'
import { ReactComponent as Clock } from '../assets/icons/clock.svg'
import { ReactComponent as Heart } from '../assets/icons/heart.svg'

const NavBar = () => {

    const iconStyle = {
        height: '24px',
        width: '24px'
    }

    return (
        <nav className='nav-bar'>
            <Link to='/top-artists'>
                <Star style={iconStyle} />
                Top Artists
            </Link>
            <Link to='/top-hits'>
                <Heart style={iconStyle} />
                Top Hits
            </Link>
            <Link to='/top-recent'>
                <Clock style={iconStyle} />
                Top Recent
            </Link>
        </nav>
    )
}

export default NavBar