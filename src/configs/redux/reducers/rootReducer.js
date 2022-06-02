import {combineReducers} from 'redux'
import counterReducer from './counterReducer'
import todosReducer from './todosReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    todo: todosReducer,
    couter: counterReducer,
    user: userReducer
})

export default rootReducer