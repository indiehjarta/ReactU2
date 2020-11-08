/**
 * (NavLInk) A special version of the <Link> that will add styling 
 * attributes to the rendered element when it matches the current URL.
 */

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBarComponent extends Component {
    render() {
        return (
            <nav>
                <ul className='link-list'>
                    <NavLink 
                        className='links' 
                        activeClassName='selected'
                        to='/login'>Login
                    </NavLink>
                    <NavLink 
                        className='links' 
                        activeClassName='selected'
                        to='/dashboard'>Dashboard
                    </NavLink>
                    <NavLink 
                        className='links' 
                        activeClassName='selected'
                        to='/user'>User
                    </NavLink>
                </ul>
            </nav>
        )
    }
};

export default NavBarComponent;
