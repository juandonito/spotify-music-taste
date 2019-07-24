import {
    TOP_ARTISTS_FETCH_SUCCESS, TOP_ARTISTS_FETCH_FAIL
} from '../constants'

const INITIAL_STATE = {
    topArtists : [],
    err: null
}

const artistsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TOP_ARTISTS_FETCH_SUCCESS : {
            return applyTopArtistsFetchSuccess(state, action)
        }
        case TOP_ARTISTS_FETCH_FAIL : {
            return applyTopArtistsFetchFail(state, action)
        }
        default: return state
    }
}

const applyTopArtistsFetchSuccess = (state, action) => {
    return {
        ...state,
        topArtists: action.payload
    }
}

const applyTopArtistsFetchFail = (state, action) => {
    return {
        ...state,
        err : action.payload
    }
}

export default artistsReducer