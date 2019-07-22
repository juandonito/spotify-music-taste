import React from 'react'
import { connect } from 'react-redux'
import { doAuthFetchSuccess } from '../actions/authActions'

import parseHash from '../utils/parseHash'

import { Redirect } from 'react-router-dom'

const Auth = ({ fetchSuccess }) => {

    const hash = window.location.hash.slice(1)

    fetchSuccess(parseHash(hash))

    return <Redirect to='/top-artists' />

}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSuccess : data => dispatch(doAuthFetchSuccess(data))
    }
}

export default connect(null, mapDispatchToProps)(Auth)