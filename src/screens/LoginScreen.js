import React, { Component } from 'react';
import Wrapper from '../components/WrapperComponent';

class LoginScreen extends Component {
    render() {
        return (
            <div className='dashboard'>
                <Wrapper>
                    <div className='login'>
                        <input
                            type='text'
                            placeholder='New user....'
                        />
                        <button className='login-btn'>Login</button>
                    </div>
                    <button>Show info</button>
                </Wrapper>
            </div>
        )
    }
};

export default LoginScreen;