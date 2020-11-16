 /**
  * This component works like a wrapper for the cards. 
  * The content in the cards renders from DashboardComponent.
  * WrapperComponent have it owns CSS module.
  * Contains a button for toggle state. If state is true, show content. If false, hide content. (tar bort detta enligt Film 2)
  */

import React, { Component } from 'react';
import styles from './WrapperStyling.module.css';

class WrapperComponent extends Component {
    constructor () {
        super();
        this.state = { showContent: true };
        
        this.toggleContent = this.toggleContent.bind(this);
    };

    // Function changes the state between true/false (show and hide) (tar bort detta enligt Film 2)
    toggleContent = () => {
        this.setState({
            showContent : !this.state.showContent
        });
    }

    render () {
        return (
            <div className={styles.card}>
                {this.props.children}
            </div>
        );
    };
};

export default WrapperComponent;
