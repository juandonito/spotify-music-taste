import { combineReducers } from 'redux'

import authReducer from './authReducer'
import artistsReducer from './artistsReducer'
import hitsReducer from './hitsReducer';
import recentTracksReducer from './recentTracksReducer'

const rootReducer = combineReducers({
    authState: authReducer,
    artistsState: artistsReducer,
    hitsState: hitsReducer,
    recentTracksState: recentTracksReducer
})

export default rootReducer