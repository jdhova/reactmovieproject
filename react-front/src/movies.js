import React, { Component } from 'react';


class movies extends Component {

    state = { search:""}
    
    render() {

    var allMovies  = this.props.movies.filter( (movies) => {
        let moviesearchToLowerCase = movies.name.toLowerCase();
        let searchName = this.state.search.toLowerCase();
        return (moviesNameToLowerCase.includes(searchName))
    })

}
}



export default movies