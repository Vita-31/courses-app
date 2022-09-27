
const initialState = {
    isAuth: false,
    name: '',
    email: '',
    token: '',
}

export function userReducer(state = initialState, action) {
    switch(action.type) {
        
        default:
            return state
    }
}

export function userSelectors(state) {
    return state.user
}