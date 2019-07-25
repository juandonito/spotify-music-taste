import {
    TOP_HITS_FETCH_SUCCESS,
    TOP_HITS_FETCH_FAIL
} from '../constants'

const INITIAL_STATE = {
    topHits : [],
    err: null
}

const hitsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TOP_HITS_FETCH_SUCCESS: {
            return applyTopHitsFetchSuccess(state, action)
        }
        case TOP_HITS_FETCH_FAIL: {
            return applyTopHitsFetchFail(state, action)
        }
        default: return state
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