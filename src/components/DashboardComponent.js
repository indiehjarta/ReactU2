/**
 * The purpose of this component is to add users, remove users,
 * manage our input's value, toggle colors and render a list of users.
 * Contains buttons to add, remove and toggle.
 */

import React, { Component, createRef } from 'react';
import WrapperComponent from './WrapperComponent';
import UserComponent from './UserComponent';

class DashboardComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            users: [],
            color: '#994ea6',
            value: [''],
            error: null,

            name: '',
            username: '',
            email: '',

            newUser: {
                name: '',
                username: '',
                email: ''
            }
        };

        this.newUser = createRef();

        // These bindings are necessary to make `this` work in the callback
        this.addUser = this.addUser.bind(this);
        this.removeUser = this.removeUser.bind(this);
        this.toggleColor = this.toggleColor.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    fetchUsers() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    users: data
                })
            )
            .catch(error => this.setState({ error }));
    }

    componentDidMount() {
        this.fetchUsers();
    }

    // Controls and changes (with onChange-button) the value of the input field
    handleInput = (e) => {
        const value = e.target.value;
        this.setState({
            ...this.state,
            [e.target.name]: value
        });
        // jag kanske ska fixa nån funktion som skapar ett object, från inputs
        console.log(e.target.value);
    };

    /**
     * Adds a user from input field by merging two arrays 
     * (value from input and users) with .concat(method) and 
     * creates a new array.
     */
    addUser = () => {
        
        if (this.newUser.current.value) {
            let user = this.state.users.concat(
                [],
                // den får ett id här, så på nåt sätt så funkar det.... jag kanske ska ha username och mail här med?
                // kan prova ta bort de 
                { id: this.state.users.length + 1, name: this.newUser.current.value });
            this.setState({ users: user });

            this.newUser.current.value = '';
        }
        console.log(this.newUser)

        // let user = this.state.users.concat(this.state.value);
        // this.setState({
        //     users: user,
        //     value: ['']
        // })
    }

    // Removes a user from the array
    removeUser = () => {
        let users = this.state.users;
        users.pop();
        this.setState({ users: users })
    };

    // Toggles the color in the state between purple and peach-ish
    toggleColor = () => {
        this.setState(this.state.color === '#994ea6' ? {
            color: '#ffb169'
        } : {
            color: '#994ea6'
        });
    };
    

    render() {
        // Fake API
        // const newUser = {
        //     name: this.state.name,
        //     username: this.state.username,
        //     email: this.state.email,
        //     address: {
        //         city: 'Mock City',
        //         street: 'Mock Street 12',
        //         suite: 'Mock Suite'
        //     }
        // };

        return (
            <div className='dashboard'>
                <WrapperComponent>
                    <ul>
                        {this.state.users.map(user => (
                            <UserComponent 
                                user={user}
                                key={user.id}
                                color={this.state.color}
                            />
                        ))}
                    </ul>
                    <button onClick={this.toggleColor} className='toggle-btn'>Toggle Colors</button>
                </WrapperComponent>
                
                <WrapperComponent>
                    <input
                        type='text'
                        name='name'
                        ref={this.newUser}
                        value={this.state.name}
                        placeholder='Name....'
                        onChange={this.handleInput}
                    />
                    <input
                        type='text'
                        name='username'
                        ref={this.newUser}
                        value={this.state.username}
                        placeholder='Username....'
                        onChange={this.handleInput}
                    />
                    <input
                        type='text'
                        name='email'
                        ref={this.newUser}
                        value={this.state.email}
                        placeholder='E-mail....'
                        onChange={this.handleInput}
                    />

                    <button onClick={this.addUser} className='add-btn' type='submit'>Add</button>
                    <button onClick={this.removeUser} className='remove-btn'>Remove</button>
                </WrapperComponent>
            </div>
        );
    };
}

export default DashboardComponent;