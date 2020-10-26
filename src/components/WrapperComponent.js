 /**
  * This component works like a wrapper for the cards. 
  * The content in the cards renders from DashboardComponent.
  * WrapperComponent have it owns CSS module.
  * Contains a button for toggle state. If state is true, show content. If false, hide content.
  */

import React, { Component } from 'react';
import styles from './WrapperStyling.module.css';

class WrapperComponent extends Component {
    constructor () {
        super();
        this.state = { showContent: true };
        
        this.toggleContent = this.toggleContent.bind(this);
    };

    // Function changes the state between true/false (show and hide)
    toggleContent = () => {
        this.setState({
            showContent : !this.state.showContent
        });
    }

    render () {
        return (
            <div className={styles.card}>
                {this.state.showContent && this.props.children}
                <hr />
                <button 
                    className={styles.button} onClick={this.toggleContent}> 
                        {this.state.showContent ? 'Hide content' : 'Show content'}
                </button>
            </div>
        );
    };
};

export default WrapperComponent;
