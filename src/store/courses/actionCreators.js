import { ADD_COURSE, DELETE_COURSE, GET_COURSES } from "./actionTypes"

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

export function addNewCourse(course) {
    return {
        type: ADD_COURSE,
        payload: course
    }
}