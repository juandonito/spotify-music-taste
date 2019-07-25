import { combineReducers } from 'redux'

import authReducer from './authReducer'
import artistsReducer from './artistsReducer'
import hitsReducer from './hitsReducer';

const rootReducer = combineReducers({
    authState: authReducer,
    artistsState: artistsReducer,
    hitsState: hitsReducer
})

export default rootReducer