import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Login from './Login'
import Auth from './Auth'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path='/' exact component={Login} />
                <Route path='/auth' component={Auth} />
            </BrowserRouter>
        </div>
    )
}

export default App