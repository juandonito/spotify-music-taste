import {
    TOP_HITS_FETCHING_TOGGLE,
    TOP_HITS_FETCH_SUCCESS,
    TOP_HITS_FETCH_FAIL,
    TOP_HITS_SET_TIME_RANGE
} from '../constants'

const INITIAL_STATE = {
    topHits : [],
    timeRange: 'long_term',
    fetching: false,
    err: null
}

const hitsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TOP_HITS_FETCHING_TOGGLE: {
            return applyToggleTopHitsFetching(state, action)
        }
        case TOP_HITS_SET_TIME_RANGE: {
            return applySetTopHitsTimeRange(state, action)
        }
        case TOP_HITS_FETCH_SUCCESS: {
            return applyTopHitsFetchSuccess(state, action)
        }
        case TOP_HITS_FETCH_FAIL: {
            return applyTopHitsFetchFail(state, action)
        }
        default: return state
    }
}

const applyToggleTopHitsFetching = (state, action) => {
    return {
        ...state,
        fetching: !state.fetching
    }
}

const applySetTopHitsTimeRange = (state, action) => {
    return {
        ...state,
        timeRange: action.payload.timeRange
    }
}

const applyTopHitsFetchSuccess = (state, action) => {
    return {
        ...state,
        topHits: action.payload.list
    }
}

const applyTopHitsFetchFail = (state, action) => {
    return {
        ...state,
        err: action.payload.err
    }
}

export default hitsReducer