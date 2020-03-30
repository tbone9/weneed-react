import React from 'react';
import { Link } from 'react-router-dom';

function HeaderComponent(){
    return(
        <div>
            <ul>
                <Link to='/main'>Main</Link>
            </ul>
        </div>
    )
}

export default HeaderComponent;