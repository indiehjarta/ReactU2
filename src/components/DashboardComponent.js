import React, { Component } from 'react';
import WrapperComponent from './WrapperComponent';
//import UserComponents from './UserComponent';

class DashboardComponent extends Component {
    /*constructor (props) {
        super(props);
    }*/
    render () {
        return (
            <div className='dashboard'>
                <WrapperComponent></WrapperComponent>
                <WrapperComponent></WrapperComponent>
            </div>
        );
    };
}

export default DashboardComponent;