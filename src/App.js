import React from 'react'
import './App.css';
import BasicTextFields from './Components/BasicTextFields';
import LoginPage from './Pages/LoginPage'
import SignIn from './Pages/SignInPage'
import TextFields from './Components/TextFields'
import { TextField } from '@material-ui/core';
import {BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/HeaderDashBoard';
import SideNavbar from './Components/SideNavbar';
import Dashboard from './Pages/Dashboard'



function App() {

  return (
  <div className="App">
    <BrowserRouter >
      <Switch>
        <Route  path = "/SignUp" component = {LoginPage} />
        <Route exact path = "/" component = {SignIn} />
        <Route  path = "/D" component = {Dashboard} />
        </Switch>
    </BrowserRouter>
   </div>
  );
}

export default App;
