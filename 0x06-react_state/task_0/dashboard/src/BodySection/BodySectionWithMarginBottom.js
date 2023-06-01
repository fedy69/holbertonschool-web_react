import React, { Component } from 'react';
import BodySection from './BodySection'
import './BodySectionWithMarginBottom.css'
import { string } from 'prop-types';

class BodySectionWithMarginBottom extends Component {
    render() {
        const { title, children } = this.props;
        return (
            <div className='bodySectionWithMargin'>
                <BodySection title={title} children={children}></BodySection>
            </div>
        );
    }
}

BodySectionWithMarginBottom.defaultProps = {
    title: '',
}

BodySectionWithMarginBottom.propTypes = {
    title: string,
}

export default BodySectionWithMarginBottom;
