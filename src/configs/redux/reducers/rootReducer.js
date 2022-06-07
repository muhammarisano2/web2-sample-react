import {combineReducers} from 'redux'
import counterReducer from './counterReducer'
import todosReducer from './todosReducer'
import userReducer from './userReducer'
import productReducer from './productReducer'

const rootReducer = combineReducers({
    todo: todosReducer,
    couter: counterReducer,
    user: userReducer,
    product: productReducer
})

export default rootReducer