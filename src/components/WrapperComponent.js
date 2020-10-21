import React, { Component } from 'react';
import styles from './WrapperStyling.module.css';

class WrapperComponent extends Component {
    constructor () {
        super();
        this.state = { showContent: true};

        this.toggleContent = this.toggleContent.bind(this);
    };

    toggleContent = () => {
        this.setState({
            showContent : !this.state.showContent
        });
    }

    render () {
        return (
            <div className={styles.card}>
                <hr />
                <button 
                    className={styles.button} onClick={this.toggleContent}> 
                        {this.state.showContent ? 'Show content' : 'Hide content'}
                </button>
            </div>
        );
    };
};

export default WrapperComponent;
