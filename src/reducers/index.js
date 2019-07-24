import { combineReducers } from 'redux'

import authReducer from './authReducer'
import artistsReducer from './artistsReducer'

const rootReducer = combineReducers({
    authState: authReducer,
    artistsState: artistsReducer
})

export default rootReducer