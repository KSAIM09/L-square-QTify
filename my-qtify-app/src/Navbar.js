import React from 'react';

function Navbar() {
    return(
        <div className='navbar'>
            <div className='logo'>
                <img src='logo.png' alt="Logo"/>
            </div>
            <div className='search-bar'>
                <input type='text' placeholder='Search' />
                <button>Search</button>
            </div>
            <div className='feedback-btn'>
                <button>Feedback</button>
            </div>
        </div>

   );
}

export default Navbar;