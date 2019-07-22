import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    return (
        <Route {...rest} render={ props => {
            return (
                isAuthenticated ?
                <Component {...props} /> :
                <Redirect to='/'/>
            )
        }} />
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.authState.access_token
    }
}

export default connect(mapStateToProps)(ProtectedRoute)