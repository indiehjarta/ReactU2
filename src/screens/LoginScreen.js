import React, { Component } from 'react';
import Wrapper from '../components/WrapperComponent';
import PropTypes from 'prop-types';


class LoginScreen extends Component {
    static propTypes = {
        value: PropTypes.string,
        history: PropTypes.object.isRequired
    }

	constructor(props) {
		super(props)
		this.state = {
			value: '',
		}
	}

	handleInput = (e) => {
        this.setState({ value: e.target.value })
    };

	navigateDashboard = () => {
		if (this.state.value.length > 9) {
		 	return this.props.history.push('/dashboard')
        } return alert('Oopsie doopsie! You need 10 characters or more to login')
	};

	render() {
		return (
			<div className='dashboard'>
                <Wrapper loginInfo='Your username should be 10 characters long or more to login'>
					<input 
                        value={this.state.value}
                        type='text'
                        placeholder='New user...'
                        onChange={this.handleInput}
                    />
                    <button
						onClick={this.navigateDashboard}
                        className='login-btn'>Login
                    </button>
				</Wrapper>
			</div>
		);
	}
}

export default LoginScreen;