import {
    AUTH_SUCCESS
} from '../constants'

const INITIAL_STATE = {
    access_token: undefined,
    token_type: undefined,
    expires_in: undefined
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case AUTH_SUCCESS: {
            return applyAuthFetchSuccess(state, action)
        }
        default : return state
    }
}

const applyAuthFetchSuccess = (state, action) => {
    return {
        ...state,
        access_token: action.payload.access_token,
        token_type: action.payload.token_type,
        expires_in: action.payload.expires_in
    }
}

export default authReducer