import React from "react";
import {getFullYear, getFooterCopy} from '../utils/utils';
import './Foter.css';

function footer() {
    return( <footer className="App-footer">
        <p>Copyright {getFullYear()} -{getFooterCopy()}</p>
    </footer>);
}
export default footer;