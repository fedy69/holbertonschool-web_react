import { selectCourse, unSelectCourse } from './courseActionCreators.js';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes.js';

describe('courseActionCreators', () => {
  it('selectCourse should create a SELECT_COURSE action', () => {
    const action = selectCourse(1);
    expect(action).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  it('unSelectCourse should create an UNSELECT_COURSE action', () => {
    const action = unSelectCourse(1);
    expect(action).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});