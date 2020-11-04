import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import NavBarComponent from './components/NavBarComponent';

// Screens
import Dashboard from './screens/DashboardScreen';
import Login from './screens/LoginScreen';
import User from './screens/UserScreen';

function App() {
  return (
      <Router>
        <NavBarComponent />
        <Route exact path='/' component={Login}/>
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/user' component={User} />
      </Router>
  );
}

export default App;
