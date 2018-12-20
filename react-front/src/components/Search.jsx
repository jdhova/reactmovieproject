import React, { Component } from 'react';
import axios from "axios"
// import Signin from "./Signin"
 import { Link } from 'react-router-dom';
 import config from "../config.json"

class Search extends Component {

    constructor(props){
      super(props)
       this.state = { 
         movies: [],
         search: "",
         input: "",
         comment:""
        }
    }
    // question why do we have comments as stage on search and search?

  componentDidMount() {

    axios.get(`${config.backendUrl}/search`,  {withCredentials: true})
     .then(result => {
      debugger
      
       // console.log("dfdfd", result)
       this.setState({movies: result.data.movies}, () =>{
        
        
       })
     })  
     .catch((error)=> {
      debugger
       console.log(error)
     })
  }


    handleChange = (e)=> {
        let {name, value}  = e.target

        this.setState({[name]: value})  // this helps you target the click target to search
        
      }
       
      handleSubmit = (e)=> {
        var input = this.state.input
        this.setState({search: input})
      }

      logInHandler = (e)=> {
        this.setState({isLoggedIn: true})
      }
      

      handleCommentSubmit = (filmId, e)=>{
        e.preventDefault();
        console.log(filmId)
        let data = {
            filmId:filmId,
            comment:this.state.comment   // Retrieving filmID data.
        }
    
        axios.post(`${config.backendUrl}/Comments`,data).then(result =>{
          console.log("He", result)
          let newMovies = this.state.movies.map(elem =>{
            if(elem.title === result.data.result.title){
              return elem = result.data.result;
            }
            return elem;
          })

          this.setState({movies:newMovies})
          
        }).catch(err => console.log(err)) 
        
       
      }

  render() {
     // debugger
     console.log(this.state)
    if(this.props.isLoggedIn) {
        var allMoviesSearch  = this.state.movies.filter( (movies) => {
        let moviesNameToLowerCase = movies.title.toLowerCase();
        let searchName = this.state.search.toLowerCase();
        return (moviesNameToLowerCase.includes(searchName))
        })
    
        var  showFilm = allMoviesSearch.map( oneFilm => {
        
            return( 
              <div className = "movielist">
                <ul>
                    <li>Movie title:{oneFilm.title}</li>
                    <li>Movie director:{oneFilm.director}</li>
                    <li>Movie year:{oneFilm.year}</li>
                    <li>Movie duration:{oneFilm.duration}</li>
                    <li>Comments: {oneFilm.comments.map(oneComment =>{
                      return(<span>
                        <span>By: {oneComment.author} </span>
                        <span>Comment: {oneComment.comment}</span>
                      </span>)
                    })}</li>
                </ul>
                <form onSubmit={e =>{this.handleCommentSubmit(oneFilm._id, e)}}>  
                  <input className = "movielistipt" type="text" placeholder="leave a comment" name="comment" onChange={this.handleChange}/>
                  <button type="submit">Comment</button>
                </form>
                </div>
            )
        })

        return (
            <div>
                <div>
                  <p>Search Movies</p>
                    <input className = "moviesearchinp" type="text" name="input" onChange={this.handleChange} ></input>
                    <button className = "moviesearchbtn"  onClick={this.handleSubmit} value="Submit"></button>   
                </div>
            {this.state.search === "" ? <div></div>: <div>{showFilm} </div>}
            </div>
        )
    } else {
       // debugger
        return <p><Link to="/Signin">Sign-in</Link></p> 
        
    }
  }    
} 


export default Search;
    