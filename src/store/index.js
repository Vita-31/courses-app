import { combineReducers, createStore } from "redux";
import { authorsReducer } from "./authors/reducer";
import { coursesReducer } from "./courses/reducer";
import { userReducer } from "./user/reducer";

const rootReducer = combineReducers({
    user: userReducer,
    courses: coursesReducer,
    authors: authorsReducer
})

export const store = createStore(rootReducer)