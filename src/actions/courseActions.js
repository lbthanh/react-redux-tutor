import * as types from './actionTypes';
import courseAPi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
    // debugger;
    return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses() {
    return function(dispatch) {
        // You can replace mock api by your real api to get data at here
        return courseAPi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}