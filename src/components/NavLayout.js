import './NavLayout.css'

import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import ProtectedRoute from './ProtectedRoute'

import NavBar from './NavBar'

import TopArtists from './TopArtists'
import TopHits from './TopHits'
import TopRecent from './TopRecent';

const NavLayout = () => {
    return (
        <div className='nav-layout'>
            <BrowserRouter>
                <ProtectedRoute path='/top-artists' component={TopArtists}/>
                <ProtectedRoute path='/top-hits' component={TopHits} />
                <ProtectedRoute path='/top-recent' component={TopRecent} />
                <NavBar/>
            </BrowserRouter>
        </div>
    )
}

export default NavLayout