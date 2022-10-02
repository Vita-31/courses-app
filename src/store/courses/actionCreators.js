import { DELETE_COURSE, GET_COURSES } from "./actionTypes"

export function getCourses(courses) {
    return {
        type: GET_COURSES,
        payload: courses
    }
}

export function deleteCourse(courseId) {
    return {
        type: DELETE_COURSE,
        payload: courseId
    }
}