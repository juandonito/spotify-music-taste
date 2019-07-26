import './NavBar.css'

import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='nav-bar'>
            <Link to='/top-artists'>Top Artists</Link>
            <Link to='/top-hits'>Top Hits</Link>
            <Link to='/top-recent'>Top Recent</Link>
        </nav>
    )
}

export default NavBar