import React, { Fragment } from 'react';
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';

function Footer() {
    return (
        <Fragment>
            <div className="App-footer">
                <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
            </div>
        </Fragment>
    );
}

export default Footer;
