import React, { useContext, useEffect } from 'react';
import './Loader.css';
import { ThemeContext } from '../../context/themeContext';

function Loader() {
    const theme = useContext(ThemeContext);

    useEffect(() => {
        const spinner = document.querySelector('.lds-spinner');
        spinner.style.setProperty('--background', theme.foreground)
    })

    return (
        <div className="lds-spinner">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
    )
}

Loader.propTypes = {}

export default Loader
