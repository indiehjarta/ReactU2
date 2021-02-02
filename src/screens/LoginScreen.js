import React, { Component } from 'react';
// import { useHistory } from 'react-router-dom';
import Wrapper from '../components/WrapperComponent';

class LoginScreen extends Component {
    constructor() {
        super();
        this.state = { showContent: false };
        
        this.toggleContent = this.toggleContent.bind(this);
    }

    // static propTypes = {
    //     history: PropTypes.object.isRequired
    // };

    toggleContent = () => {
        this.setState({
            showContent: !this.state.showContent
        })
    };

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
                    <button onClick={this.toggleContent}>
                        {this.state.showContent ? 'Hide content' : 'Show content'}
                    </button>
                </Wrapper>
            </div>
        )
    }
};

export default LoginScreen;