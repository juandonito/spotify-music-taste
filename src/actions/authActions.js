import {
    AUTH_SUCCESS
} from '../constants'

export const doAuthSuccess = (data) => {

    return {
        type: AUTH_SUCCESS,
        payload: {
            access_token: data.access_token,
            token_type: data.token_type,
            expires_in: data.expires_in
        }
    }

}