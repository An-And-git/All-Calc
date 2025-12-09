import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const ToggleColor = () =>{
    const [isActive, setActive] = useState("false");

    const ToggleClass = () => {
        setActive(!isActive);
        const isMoon = faMoon;
        isMoon ? document.body.classList.add('light') : document.body.classList.remove('light');
        
    };
    return(
        <div className="color-toggle">
            <p onClick={ToggleClass}><FontAwesomeIcon icon={isActive ? faMoon : faSun} /></p>
            <p onClick={ToggleClass}><FontAwesomeIcon icon={isActive ? document.body.classList.add('light') : document.body.classList.remove('light')} /></p>
        </div>
    )
}

export default ToggleColor;