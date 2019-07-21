import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Login from './Login'
import Auth from './Auth'
import TopArtists from './TopArtists'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path='/' exact component={Login} />
                <Route path='/auth' component={Auth} />
                <Route path='/top-artists' component={TopArtists}/>
            </BrowserRouter>
        </div>
    )
}

export default App