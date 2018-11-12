import React, {Component} from 'react';
import Movie from './movie';
import axios from 'axios';

class MovieContainer extends Component{
    componentWillMount(){
        const api_url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json'
        axios.get(api_url).then((response) => {
            console.log('Response', response);
        });
    }
    render(){
        return (
            <div>
                <h2>Movie Container</h2>
                <Movie/>
           </div>
        )
    }
}

export default MovieContainer;