import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { oneOfType } from 'prop-types';
import { prototype } from 'enzyme-adapter-react-16';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr>
      {isHeader ? 
        (textSecondCell === null ? (
          <th colSpan="2">{ textFirstCell }</th>
        ) : (
          <>
           <th>{ textFirstCell }</th>
           <th>{ textSecondCell }</th>
          </>
        )
          )  : (
            <>
              <td>{ textFirstCell }</td>
              <td>{ textSecondCell }</td>
            </>
          )}
    </tr>
  );
}

CourseListRow.propTypes ={
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: oneOfType([PropTypes.string, prototype.number])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};


export default CourseListRow;
