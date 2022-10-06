import { GET_USER, GET_USER_TOKEN, SET_IS_AUTH, SET_LOGOUT } from "./actionTypes"

const initialState = {
    isAuth: false,
    name: '',
    email: '',
    token: '',

}

export function userReducer(state = initialState, action) {
    switch(action.type) {
        case GET_USER: 
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email
            }

        case GET_USER_TOKEN: 
            return {
                ...state, 
                isAuth: true,
                token: action.payload
            }

        case SET_IS_AUTH: 
            return {
                ...state,
                isAuth: true
            }

        case SET_LOGOUT: 
            return {
                ...state,
                isAuth: false,
                email: '',
                name: '',
                token: ''
            }

        default:
            return state
    }
}