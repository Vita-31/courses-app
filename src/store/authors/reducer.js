import { GET_AUTHORS } from "./actionTypes"

const initialState = []

export function authorsReducer(state = initialState, action) {
    switch(action.type) {
        case GET_AUTHORS: 
            return action.payload
        
        default:
            return state
    }
}