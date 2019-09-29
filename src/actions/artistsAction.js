import {
    TOP_ARTISTS_FETCH_SUCCESS,
    TOP_ARTISTS_FETCH_FAIL
} from '../constants'

import TIME_RANGE from '../api/spotify'

import spotify from '../api/spotify'

export const doFetchTopArtists = (timeRange = TIME_RANGE.LONG) => {

    return (dispatch, getState) => {
        const { access_token } = getState().authState

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