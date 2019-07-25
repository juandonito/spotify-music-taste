import './NavBar.css'

import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='nav-bar'>
            <Link to='/top-artists'>Top Artists</Link>
            <Link to='/top-hits'>Top Hits</Link>
        </nav>
    )
}

export default NavBar