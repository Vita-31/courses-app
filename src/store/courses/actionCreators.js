import { GET_COURSES } from "./actionTypes";

export function getCourses(courses) {
    return {
        type: GET_COURSES,
        payload: courses
    }
}