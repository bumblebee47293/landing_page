import React from'react';
import './style.css';
import Button from '../button/button';

function Navbar() {
    // The Navbar component renders a navigation bar containing a title and a button.
    function handleClick() {
        alert('You clicked the Sign-In Button!');
    }

    return (
        <nav className='navbar'>
            <h3>Start Bootstrap</h3>
            <Button onButtonClick={handleClick} title='Sign-In' />
        </nav>
    );
}

export default Navbar;