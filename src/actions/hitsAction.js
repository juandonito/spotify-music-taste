import {
    TOP_HITS_FETCHING_TOGGLE,
    TOP_HITS_FETCH_SUCCESS, 
    TOP_HITS_FETCH_FAIL,
    TOP_HITS_SET_TIME_RANGE
} from '../constants'

import spotify from '../api/spotify'

export const doFetchTopHits = () => {

    return (dispatch, getState) => {
        
        const { access_token } = getState().authState
        const { timeRange } = getState().hitsState

        dispatch(doToggleTopHitsFetching())

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
            dispatch(doToggleTopHitsFetching())
        })
        .catch(err => {
            dispatch(doFetchTopHitsFail(err))
            dispatch(doToggleTopHitsFetching())
        })

    }
}

export const doToggleTopHitsFetching = () => {
    return {
        type: TOP_HITS_FETCHING_TOGGLE
    }
}

export const doUpdateTimeRange = (timeRange) => {

    return dispatch => {

        dispatch(doSetHitsTimeRange(timeRange))
        dispatch(doFetchTopHits())

    }

}

export const doSetHitsTimeRange = timeRange => {

    return {
        type: TOP_HITS_SET_TIME_RANGE,
        payload: {
            timeRange
        }
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