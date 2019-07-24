import {
    TOP_ARTISTS_FETCH_SUCCESS,
    TOP_ARTISTS_FETCH_FAIL
} from '../constants'

import spotify from '../api/spotify'

export const doFetchTopArtists = () => {

    return (dispatch, getState) => {
        const { access_token } = getState().authState

        console.log('test')

        spotify.get('/top/artists', {
            headers: {
                Authorization: 'Bearer '+access_token
            },
            params: {
                limit: 50
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
            ...list
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