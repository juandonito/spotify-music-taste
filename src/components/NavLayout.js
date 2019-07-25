import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import ProtectedRoute from './ProtectedRoute'

import NavBar from './NavBar'

import TopArtists from './TopArtists'
import TopHits from './TopHits'

const NavLayout = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <ProtectedRoute path='/top-artists' component={TopArtists}/>
                <ProtectedRoute path='/top-hits' component={TopHits} />
                <NavBar/>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default NavLayout