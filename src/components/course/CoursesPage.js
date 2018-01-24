import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    // this.state = {
    //      course : {title: ""},
    //      courses : []
    // };

    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);    
    // this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);    
  }

  // redirectToAddCoursePage() {
  //   browserHistory.push('/course');
  // }

  // onTitleChange(event) {
  //     const course = this.state.course;
  //     course.title = event.target.value;
  //     this.setState({course: course});
  // }

  // onClickSave() {      
  //     this.props.actions.createCourse(this.state.course); // via bindActionCreators
  //     // this.props.createCourse(this.state.course); // because it mapped by mapDispatchToProps, otherwise you have to call 'dispatch' as below
  //     // this.props.dispatch(courseActions.createCourse(this.state.course));
  // }

  // Move to CourseList.js
  // courseRow(course, index) {
  //     return <div key={index}> {course.title}</div>;
  // }

  render() {      
    return (
      <div>
        <h1>Courses</h1>
        {/*Move to CourseList.js
        {this.props.courses.map(this.courseRow)}*/}
        <CourseList courses={this.props.courses}/>
        
        {/*<h2> Add Course</h2>
        <input 
            type="text"
            onChange={this.onTitleChange}
            value={this.state.course.title} />

        <input
            type="submit"
            value="Save"
            onClick={this.onClickSave} />*/}
        {/*<input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage}/>

        */}
      </div>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,  // --> actions was binded via [bindActionCreators], so we use one proptype for all actions
  courses: PropTypes.array.isRequired // --> manual call for each of actions 
  // createCourse: PropTypes.func.isRequired
  // dispatch: PropTypes.func.isRequired  // we no longer need to use dispatch when [mapDispatchToProps] was defined
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {    
    return {        
        // createCourse: course => dispatch(courseActions.createCourse(course)) // manually way
        actions: bindActionCreators(courseActions, dispatch) // go to [courseActions] and auto bind the all actions to dispatch
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);