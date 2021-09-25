import React from 'react';
import './header.css';
const Header = () => {
    return (
        <div className='container text-white'>
             <div className='header text-center p-4 border rounded mt-4'>
                   <h1><strong className='orange'> Galaxy It</strong></h1>
                   <p><strong>The list of an It Company employer .</strong></p>
                   <h2>Total Budget : <strong className='orange'> 2 Million</strong></h2>
                </div>
        </div>
               
            );
};

export default Header;
