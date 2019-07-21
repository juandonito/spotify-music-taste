import React from 'react'
import { connect } from 'react-redux'

import { doAuthFetchSuccess } from '../actions/authActions'

import { Redirect } from 'react-router-dom'

const Auth = ({ fetchSuccess }) => {

    // parsing data in url

    let data = {}

    const query = window.location.hash.slice(1).split('&')

    for (let i = 0 ; i < query.length ; i++ ){
        const keyVal = query[i].split('=')
        data = {...data, [keyVal[0]] : keyVal[1]}
    }

    fetchSuccess(data)

    return data.access_token ? <Redirect to='/top-artists' /> : null
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSuccess : data => dispatch(doAuthFetchSuccess(data))
    }
}

export default connect(null, mapDispatchToProps)(Auth)