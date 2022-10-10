import { ADD_AUTHOR, GET_AUTHORS } from "./actionTypes";


export function getAuthors(authors) {
    return {
        type: GET_AUTHORS,
        payload: authors
    }
}

export function addNewAuthor(author) {
    return {
        type: ADD_AUTHOR,
        payload: author
    }
}