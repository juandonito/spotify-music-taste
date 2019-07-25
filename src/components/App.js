import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

import Login from './Login'
import Auth from './Auth'
import TopArtists from './TopArtists'
import TopHits from './TopHits'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path='/' exact component={Login} />
                <Route path='/auth' component={Auth} />
                <ProtectedRoute path='/top-artists' component={TopArtists}/>
                <ProtectedRoute path='/top-hits' component={TopHits} />
            </BrowserRouter>
        </div>
    )
}

export default App