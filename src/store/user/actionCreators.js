import { GET_USER, GET_USER_TOKEN, SET_IS_AUTH, SET_LOGOUT } from "./actionTypes";

export function getUser(user) {
    return {
        type: GET_USER,
        payload: user
    }
}

export function getUserToken(token) {
    return {
        type: GET_USER_TOKEN,
        payload: token
    }
}

export function isAuthUser() {
    return {
        type: SET_IS_AUTH,
    }
}

export function setLogoutUser() {
    return {
        type: SET_LOGOUT,
    }
}