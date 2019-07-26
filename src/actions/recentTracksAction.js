import {
    RECENT_TRACKS_FETCH_SUCCESS,
    RECENT_TRACKS_FETCH_FAIL
} from '../constants'

import spotify from '../api/spotify'

export const doFetchRecentTracks = () => {
    return (dispatch, getState) => {
        
        const { access_token } = getState().authState

        spotify.get('/player/recently-played', {
            headers: {
                Authorization: 'Bearer '+access_token
            },
            params: {
                limit: 50
            }
        })
        .then(response => {
            dispatch(doFetchRecentTracksSuccess(response.data.items))
        })
        .catch(err => {
            dispatch(doFetchRecentTracksFail(err))
        })

    }
}

export const doFetchRecentTracksSuccess = (list) => {
    return {
        type: RECENT_TRACKS_FETCH_SUCCESS,
        payload: {
            list
        }
    }
}

export const doFetchRecentTracksFail = (err) => {
    return {
        type: RECENT_TRACKS_FETCH_FAIL,
        payload: {
            err
        }
    }
}