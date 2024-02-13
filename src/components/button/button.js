import React from'react';
import './style.css';

function Button(props) {
    // The Button component renders a button that has a click event listener.
    const {
        onButtonClick,
        title
    } = props;

    return (
        <button className='simpleButton' onClick={onButtonClick}>
            {title}
        </button>
    );
}

export default Button;