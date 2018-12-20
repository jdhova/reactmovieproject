
import React, { Component } from 'react';
import axios from "axios";
// import { Link, Redirect } from 'react-router-dom';
import './Signin.css';
import config from "../config.json"



// axios.defaults.withCredentials = true;

class Comment extends Component {
    constructor(){
        super()
        this.state = { 
            Comments: '',
            
         
        }

    }

handleSubmitComment = (e) => {
            debugger
    e.preventDefault();

    axios.post(`${config.backendUrl}/Comments`, 
    {   
        
        // withCredentials: true,
        method: 'post',
        data: {
            Comments: this.state.comments,
        
        }
    })

    .then((result)=> { 
        debugger
        console.log(result)
        // this.props.logInHandler()
    })
    .catch((err)=>{
    //  
        console.log(err)
    })
    
}

handleOnChange = (e) => {
    var objectData = {}
    objectData[e.target.name] = e.target.value  // lifting up state
    this.setState(objectData)
    
}

render() {
    return 
        
    }

}

export default Comments