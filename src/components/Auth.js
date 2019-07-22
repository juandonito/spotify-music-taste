import React from 'react'
import { connect } from 'react-redux'
import { doAuthSuccess } from '../actions/authActions'

import parseHash from '../utils/parseHash'

import { Redirect } from 'react-router-dom'

const Auth = ({ access_token, fetchSuccess }) => {

    if (!access_token) {

        const hash = window.location.hash.slice(1)

        fetchSuccess(parseHash(hash))

    }

    return <Redirect push to='/top-artists' />

}

const mapStateToProps = (state) => {
    return {
        access_token: state.authState.access_token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSuccess : data => dispatch(doAuthSuccess(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)