import {
    RECENT_TRACKS_FETCH_SUCCESS,
    RECENT_TRACKS_FETCH_FAIL
} from '../constants'

const INITIAL_STATE = {
    recentTracks: [],
    err: null
}

const recentTracksReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case RECENT_TRACKS_FETCH_SUCCESS: {
            return applyRecentTracksFetchSuccess(state, action)
        }
        case RECENT_TRACKS_FETCH_FAIL: {
            return applyRecentTracksFetchFail(state, action)
        }
        default: return state
    }
}

const applyRecentTracksFetchSuccess = (state, action) => {
    return {
        ...state,
        recentTracks: action.payload.list
    }
}

const applyRecentTracksFetchFail = (state, action) => {
    return {
        ...state,
        err: action.payload.err
    }
}

export default recentTracksReducer