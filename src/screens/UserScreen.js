import React, { useState, useEffect } from 'react'
import Wrapper from '../components/WrapperComponent';

const UserScreen = () => {
    const [user, setUser] = useState([]);

    
    return (
        <div className='dashboard'>
            <Wrapper value='user'>
                <h1>Select a user</h1>
                <h2>{user.username}</h2>
                <h4>{user.name}</h4>
                <p>{user.email}</p>
            </Wrapper>
        </div>
    )
}

export default UserScreen;
