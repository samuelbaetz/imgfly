import {combineReducers} from 'redux'
import auth from "./auth"
import message from './message'
import imgs from './imgs'
export default combineReducers({
    auth,
    message,
    imgs
})