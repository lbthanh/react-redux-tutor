import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
    // debugger;
    return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function updateCourseSuccess(course) {
    return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function createCourseSuccess(course) {
    return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function loadCourses() {
    return function(dispatch) {
        // You can replace mock api by your real api to get data at here
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveCourse(course) {
    return function(dispatch, getState) {
        return courseApi.saveCourse(course)
            .then( savedCourse => {
                course.id ? dispatch(updateCourseSuccess(savedCourse)):
                            dispatch(createCourseSuccess(savedCourse));
            })
            .catch(error => {
                throw(error);
            });
    };
}