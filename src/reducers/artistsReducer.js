import {
    TOP_ARTISTS_FETCH_SUCCESS, 
    TOP_ARTISTS_FETCH_FAIL,
    TOP_ARTISTS_SET_TIME_RANGE
} from '../constants'

const INITIAL_STATE = {
    topArtists : [],
    timeRange: 'long_term',
    err: null
}

const artistsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TOP_ARTISTS_SET_TIME_RANGE : {
            return applySetTopArtistsTimeRange(state, action)
        }
        case TOP_ARTISTS_FETCH_SUCCESS : {
            return applyTopArtistsFetchSuccess(state, action)
        }
        case TOP_ARTISTS_FETCH_FAIL : {
            return applyTopArtistsFetchFail(state, action)
        }
        default: return state
    }
}

const applySetTopArtistsTimeRange = (state, action) => {

    return {
        ...state,
        timeRange: action.payload.timeRange
    }
}

const applyTopArtistsFetchSuccess = (state, action) => {
    return {
        ...state,
        topArtists: action.payload.list
    }
}

const applyTopArtistsFetchFail = (state, action) => {
    return {
        ...state,
        err : action.payload
    }
}

export default artistsReducer