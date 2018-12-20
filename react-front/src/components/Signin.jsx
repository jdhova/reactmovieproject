
import React, { Component } from 'react';
import axios from "axios";
import { Link, Redirect } from 'react-router-dom';
import './Signin.css';
import config from "../config.json"


axios.defaults.withCredentials = true;
class Signin extends Component {
    constructor(){
        super()
        this.state = { 
            username: '',
            password: '',
           
        }

    }
    handleSigninSubmit = (e) => {
        debugger  
        e.preventDefault();
     
        axios.post(`${config.backendUrl}/signin`, 
        {   
            withCredentials: true,
            method: 'post',
            data: {
                username: this.state.username,
                password: this.state.password,
            }
        })
        .then((result)=> { 
          debugger
            console.log(result)
            this.props.logInHandler()
        })
        .catch((err)=>{
          debugger
            console.log(err)
        })
        
    }

 

    handleOnChange = (e) => {
        var objectData = {}
        objectData[e.target.name] = e.target.value
        this.setState(objectData)
        
    }

 render() {
    return ( 
          <div className="register">
             <h3>Sign in </h3>
                 <form onSubmit={this.handleSigninSubmit}>
                     <input className= "user" onChange={this.handleOnChange} name="username" type="text" placeholder="username"/>
                     <input className= "pass" onChange={this.handleOnChange} name="password"  type="password" placholder="password"/>
                     <input className= "usersub" type="submit" value='submit'/>
                 </form>
                 <p>Or <Link to="/Signup">register</Link></p>
          </div> 
        )

    }
}

export default Signin