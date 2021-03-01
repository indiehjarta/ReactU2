 /**
  * This component works like a wrapper for the cards. 
  * The content in the cards renders from DashboardComponent.
  * WrapperComponent have it owns CSS module.
  * Contains a button for toggle state. If state is true, show content. If false, hide content. 
*/

import React, { Component } from 'react';
import styles from './WrapperStyling.module.css';
import PropTypes from 'prop-types';

class WrapperComponent extends Component {
    static propTypes = {
        loginInfo: PropTypes.string,
        showContent: PropTypes.bool
    }

    constructor () {
        super();
        this.state = { showContent: true };
        
        this.toggleContent = this.toggleContent.bind(this);
    };

    // Function changes the state between true/false (show and hide)
    toggleContent = () => {
        this.setState({
            showContent: !this.state.showContent
        });
    }

    render () {
        return (
            <div className={styles.card}>
                <div>
                    {this.props.children}
                    {!this.state.showContent && <p className='login-info'>{this.props.loginInfo}</p>}
                </div>

                {this.props.loginInfo && 
                    <div>
                        {!this.state.showContent 
                        ? 
                        <button onClick={this.toggleContent}>Hide info</button> 
                        : 
                        <button onClick={this.toggleContent}>Show info</button>}
                    </div>
                }
            </div>
        );
    };
};

export default WrapperComponent;