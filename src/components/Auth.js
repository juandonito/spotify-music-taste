import React from 'react'

import { Redirect } from 'react-router-dom'

const Auth = () => {

    // parsing data in url

    let data = {}

    const query = window.location.hash.slice(1).split('&')

    for (let i = 0 ; i < query.length ; i++ ){
        const keyVal = query[i].split('=')
        data = {...data, [keyVal[0]] : keyVal[1]}
    }

    return data.access_token ? <Redirect to='/' /> : null
}

export default Auth