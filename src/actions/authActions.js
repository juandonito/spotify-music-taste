import { 
    AUTH_FETCH,
    AUTH_FETCH_SUCCESS
} from '../constants'

export const doAuthFetch = () => {
    return {
        type: AUTH_FETCH
    }
}

export const doAuthFetchSuccess = (data) => {

    return {
        type: AUTH_FETCH_SUCCESS,
        payload: {
            access_token: data.access_token,
            token_type: data.token_type,
            expires_in: data.expires_in
        }
    }
    
}