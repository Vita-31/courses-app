import { GET_COURSES } from "./actionTypes";

const initialState = []

export function coursesReducer(state = initialState, action) {
    console.log(action.payload, 'payload')
    console.log(action.type, 'type')
    switch (action.type) {
        case GET_COURSES:
            return action.payload;
        
        default:
            return state
    }
}