import {SIGNIN_ACTION, SIGNIN_FAILED_ACTION, SIGNIN_SUCCESS_ACTION} from "../../Constants/ActionTypes";
import {SIGNUP_ACTION, SIGNUP_FAILED_ACTION, SIGNUP_SUCCESS_ACTION} from "../../Constants/ActionTypes/ActionTypes";

let initialState;
if (localStorage.getItem('state') !== null ){
    initialState = JSON.parse(localStorage.getItem('state')).AuthReducer;
}
else{
    initialState = {
        userInfo: {},
    }
}

function AuthReducer(state = initialState , action) {

    switch (action.type) {
        
        case SIGNIN_ACTION:
            return {
                ...state,
                loading: action.loading,
                logged: action.logged,
            }
        case SIGNIN_SUCCESS_ACTION:
            return {
                ...state,
                loading: action.loading,
                logged: action.logged,
                userInfo: action.userInfo
            }
        case SIGNIN_FAILED_ACTION:
            return {
                ...state,
                loading: action.loading,
                logged: action.logged,
                error: true
            }
        case SIGNUP_ACTION:
            return {
                ...state,
                loading: action.loading,
            }
        case SIGNUP_SUCCESS_ACTION:
            return {
                ...state,
                loading: action.loading
            }
        case SIGNUP_FAILED_ACTION:
            return {
                ...state,
                loading: action.loading,
                error: true
            }
        default:
            return state;
    }
}

export default AuthReducer;
