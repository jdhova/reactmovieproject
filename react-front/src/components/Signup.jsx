import React, { Component } from 'react';
import axios from "axios";
import config from "../config.json"

class Signup extends Component {
        constructor(){
            super()
            this.state = { 
                username: '',
                password: '',
                firstname: '',
                lastname:''
            }
        }

    handleSubmit = (e) => {     
        e.preventDefault();
        debugger;
        axios(`${config.backendUrl}/Signup`,  
            {withCredentials: true,
            method: 'post',
            data: {username: this.state.username,
                    password: this.state.password,
                    firstname: this.state.firstname,
                    lastname: this.state.lastname
                }
            }
        ) 
        .then((result)=> {  
            this.props.history.push("/signin")
        })
        .catch((err)=>{
            debugger
          })    
    }


    handleOnChange = (e) => {
        var objectData = {}
        objectData[e.target.name] = e.target.value
        //debugger
        this.setState(objectData)
        // debugger
    }
    render() {
        return(
            <div className="m">
                 <h3>Sign up</h3>
                 <form onSubmit={this.handleSubmit}>
                    <input className= "fn" onChange={this.handleOnChange} name="firstname" type="text" placeholder="first-name"/>
                    <input className= "ln"onChange={this.handleOnChange} name="lastname"  type="text" placholder="last-name"/> <br/>
                    <input className= "un"onChange={this.handleOnChange} name="username" type="text" placeholder="username"/>
                    <input className= "pw"onChange={this.handleOnChange} name="password"  type="password" placholder="password"/>
                    <input className= "btnn" type="submit" value='submit'/>
                    
                </form>
            </div>
        )
    }
}


export default Signup


// how do i render a new page if log in and signup  is successful