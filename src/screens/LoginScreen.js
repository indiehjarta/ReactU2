import React, { Component } from 'react';
// import { useHistory } from 'react-router-dom';
import Wrapper from '../components/WrapperComponent';

class LoginScreen extends Component {
    // static propTypes = {
    //     history: PropTypes.object.isRequired
    // };

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