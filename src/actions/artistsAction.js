import {
    TOP_ARTISTS_FETCH_SUCCESS,
    TOP_ARTISTS_FETCH_FAIL,
    TOP_ARTISTS_SET_TIME_RANGE
} from '../constants'

import spotify from '../api/spotify'

export const doFetchTopArtists = () => {

    return (dispatch, getState) => {

        const { access_token } = getState().authState
        const { timeRange } = getState().artistsState

        spotify.get('/top/artists', {
            headers: {
                Authorization: 'Bearer '+access_token
            },
            params: {
                limit: 50,
                time_range: timeRange
            }
        })
        .then(response => {
            dispatch(doFetchTopArtistsSuccess(response.data.items))
        })
        .catch(err => {
            dispatch(doFetchTopArtistsFail(err))
        })
    }

}

export const doUpdateTimeRange = (timeRange) => {

    return (dispatch) => {

        dispatch(doSetArtistsTimeRange(timeRange))
        dispatch(doFetchTopArtists())

    }

}

export const doSetArtistsTimeRange = (timeRange) => {
    
    return {
        type: TOP_ARTISTS_SET_TIME_RANGE,
        payload: {
            timeRange
        }
    }

}

export const doFetchTopArtistsSuccess = (list) => {

    return {
        type: TOP_ARTISTS_FETCH_SUCCESS,
        payload: {
            list
        }
    }

}

export const doFetchTopArtistsFail = (err) => {
    return {
        type: TOP_ARTISTS_FETCH_FAIL,
        payload: {
            err
        }
    }
}