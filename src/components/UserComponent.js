 /**
  * This function component renders one user and color
  * The text color of the users will depend on the value it gets from props.
  */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserComponent = ({ user, color }) => {
    return (
        <div>
            <Link to={`/user/${user.id}`} key={user.id}>
                <li 
                    className='user-list'
                    key={user.id} 
                    style={{color: color}}> 
                        {user.name} 
                </li>
            </Link>
        </div>
    );
}

UserComponent.propTypes = {
    user: PropTypes.object,
    color: PropTypes.string,
    id: PropTypes.number
}

export default UserComponent;