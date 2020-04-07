import React from 'react';
import { Link } from 'react-router-dom';

function HeaderComponent(){
    
    return(
        <div className='header'>
            <h1>WeNeed</h1>
            <ul>
                <Link to='/main'>Main</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Log In</Link>
            </ul>
        </div>
    )
}

export default HeaderComponent;