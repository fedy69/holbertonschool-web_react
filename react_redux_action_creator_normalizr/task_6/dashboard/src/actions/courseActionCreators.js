import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes.js";
import { bindActionCreators } from 'redux';
import { selectCourse, unSelectCourse } from './courseActionCreators';

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index,
  };
}

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index,
  };
}
export const boundSelectCourse = (index) => dispatch(selectCourse(index));
export const boundUnSelectCourse = (index) => dispatch(unSelectCourse(index));
