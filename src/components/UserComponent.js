 /**
  * This function component renders one user and color
  * The text color of the users will depend on the value it gets from props.
  */

import React from 'react';

const UserComponent = ({ user, color }) => {
    return (
        <div>
            <li key={user} style={{color: color}}> {user} </li>
        </div>
    );
}

export default UserComponent;