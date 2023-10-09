import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape'
import PropTypes from 'prop-types';
import './CourseList.css'

function CourseList() {
  return (
    <div className="Notification">
      <table id="CourseList">
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" and isHeader={true} />
        </thead>
        <tbody>
          { listCourses.length == 0 ? (<th>No course available yet</th>): 
          (listCourses.map((course)=>{
            <CourseListRow key = {course.id} textFirstCell={course.name} textSecondCell={course.credit} />
          }))}
        </tbody>
      </table>
    </div>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
  listCourses: []
};
export default CourseList;