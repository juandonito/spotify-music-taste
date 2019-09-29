import {
    TOP_HITS_FETCH_SUCCESS, 
    TOP_HITS_FETCH_FAIL
} from '../constants'

import TIME_RANGE from '../api/spotify'

import spotify from '../api/spotify'

export const doFetchTopHits = (timeRange = TIME_RANGE.LONG) => {

    return (dispatch, getState) => {
        
        const { access_token } = getState().authState

        spotify.get('/top/tracks', {
            headers: {
                Authorization: 'Bearer '+access_token
            },
            params: {
                limit: 50,
                time_range: timeRange
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
            list
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