import React, {Component} from 'react';
import Movie from './movie';
import axios from 'axios';

class MovieContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            movies: []
        };
    }

    componentWillMount(){
        const api_url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json'
        axios.get(api_url).then((response) => {
            console.log('Response', response);

            this.setState({
                movies: response.data.feed.entry
            });
        });
    }

    render(){
        console.log(this.state);

        const movieList = this.state.movies.map((movieInfo, index) => {
            return <Movie info={movieInfo} key={index}/>;
        });

        return (
            <div>
                {movieList}
           </div>
        )
    }
}

export default MovieContainer;