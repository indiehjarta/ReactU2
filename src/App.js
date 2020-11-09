import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import NavBarComponent from './components/NavBarComponent';

// Screens
import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from './screens/LoginScreen';
import UserScreen from './screens/UserScreen';

function App() {
  return (
      <Router>
        <NavBarComponent />
        <Switch>
          <Route exact path='/' component={LoginScreen}/>
          <Route path='/login' component={LoginScreen} />
          <Route path='/dashboard' component={DashboardScreen} />
          <Route path='/user' component={UserScreen} />
          <Route path='/user/:id' component={UserScreen} />
        </Switch>
      </Router>
  );
}

export default App;
