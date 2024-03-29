import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../actions/type'

const user = JSON.parse(localStorage.getItem("user"))

const intialState = user
? {isLoggedIn: true, user}
: {isLoggedIn: false, user: null}
// eslint-disable-next-line
export default function (state=intialState, action) {
    const {type, payload} = action;

    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false
            }
        case REGISTER_FAIL:
            return{
                ...state,
                isLoggedIn: false
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                isLoggedIn: true,
                user: payload.user
            }
        case LOGIN_FAIL:
            return{
                ...state,
                isLoggedIn: false
                
            }
        case LOGOUT:
            return{
                ...state,
                isLoggedIn: false,
                user: null
            }
        default:
            return state
    }
}