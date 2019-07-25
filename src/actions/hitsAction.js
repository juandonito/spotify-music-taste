import {
    TOP_HITS_FETCH_SUCCESS, 
    TOP_HITS_FETCH_FAIL
} from '../constants'

import spotify from '../api/spotify'

export const doFetchTopHits = () => {

    return (dispatch, getState) => {
        
        const { access_token } = getState().authState

        spotify.get('/top/tracks', {
            headers: {
                Authorization: 'Bearer '+access_token
            },
            params: {
                limit: 50
            }
        })
        .then(response => {
            dispatch(doFetchTopHitsSuccess(response.data.items))
        })
        .catch(err => {
            dispatch(doFetchTopHitsFail(err))
        })

    }
}

export const doFetchTopHitsSuccess = (list) => {
    return {
        type: TOP_HITS_FETCH_SUCCESS,
        payload: {
            list: [...list]
        }
    }
}

export const doFetchTopHitsFail = (err) => {
    return {
        type: TOP_HITS_FETCH_FAIL,
        payload: {
            err
        }
    }
}