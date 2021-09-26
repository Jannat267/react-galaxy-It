import React from 'react';
// css file import 
import './header.css';
// header componant
const Header = () => {
    return (
        // jsx for header
        <div className='container text-white bg-dark
        text-center p-4 border rounded mt-4'>
             <div className='header'>
                   <h1><strong className='orange'> Galaxy It</strong></h1>
                   <p><strong>The list of an It Company employer .</strong></p>
                   <h2>Total Budget : <strong className='orange'> $2 Million</strong></h2>
                </div>
        </div>
               
            );
};
// export componant
export default Header;
