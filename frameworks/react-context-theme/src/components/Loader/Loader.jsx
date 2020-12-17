import React from 'react';
import './Loader.css';
import PropTypes from 'prop-types';

function Loader() {
    return (
        <div class="lds-spinner">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
    )
}

Loader.propTypes = {}

export default Loader
