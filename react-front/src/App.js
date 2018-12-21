import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx"
import Search from "./components/Search.jsx"
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

// import Signup from "./components/Signup.jsx"

class App extends Component {

  constructor(props){
    super(props)
     this.state = { 
       isLoggedIn: false,  
      }
  }

  logInHandler = (e)=> {
    // debugger
    this.setState({isLoggedIn: true})
  }
  render(){
   //  debugger
    return (
      <Router>
       <div>  
          <Route exact path="/" render={(props)=> <Signin  logInHandler={this.logInHandler}/>} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Signin" render={(props)=> <Signin  {...props}  logInHandler={this.logInHandler}/>} />
          <Route path="/search" render={props =>< Search {...props} isLoggedIn={this.state.isLoggedIn} />} /> 
          {this.state.isLoggedIn? <Redirect to="/search"/>: <div></div>}
        </div>
      </Router>

    )
  }
}




export default App;




