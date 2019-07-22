import React from 'react'
import { connect } from 'react-redux'
import { doAuthFetchSuccess } from '../actions/authActions'

import parseHash from '../utils/parseHash'

import { Redirect } from 'react-router-dom'

const Auth = ({ access_token, fetchSuccess }) => {

    const hash = window.location.hash.slice(1)

    fetchSuccess(parseHash(hash))

    return access_token ? <Redirect to='/top-artists' /> : <Redirect to='/'/>

}

const mapStateToProps = (state) => {
    return {
        access_token: state.authState.access_token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSuccess : data => dispatch(doAuthFetchSuccess(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)