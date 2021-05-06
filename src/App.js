import React from 'react'
import './App.css';
import BasicTextFields from './Components/BasicTextFields';
import LoginPage from './Pages/LoginPage'
import SignIn from './Pages/SignInPage'
import TextFields from './Components/TextFields'
import { TextField } from '@material-ui/core';
import {BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/HeaderDashBoard';


function App() {
  return (

    /*<div className="App">
      <BrowserRouter >
      
        <Switch>
        <Route  path = "/SignUp" component = {LoginPage} />
        <Route  path = "/" component = {SignIn} />
        </Switch>
      
      </BrowserRouter>
   
     
     </div>
     */
    <div className = "App">
      <Header />
    </div>

  );
}

export default App;
