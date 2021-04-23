import React from 'react';
import Movie from './movie.js';

export default class Movies extends React.Component {
    render() {
        return (
            this.props.movies.map((movie, idx) => (
                  <Movie  
                    idx = {idx}
                    name = {movie.name}
                    overview = {movie.overview}
                    popularity = {movie.popularity}
                    image = {movie.image}
                  />
            )
            )
        );
    }
}