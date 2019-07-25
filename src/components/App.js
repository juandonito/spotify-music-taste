import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './Login'
import Auth from './Auth'
import NavLayout from './NavLayout'
import ProtectedRoute from './ProtectedRoute';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Login} />
                    <Route path='/auth' component={Auth} />
                    <ProtectedRoute component={NavLayout} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App