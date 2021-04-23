import React from 'react'

export default class Movie extends React.Component {
    render() {
        return(
            <>
            <h2 key={this.props.idx}>{this.props.name}</h2>
            <h3 key={this.props.idx}>{this.props.overview}</h3>
            <h3 key={this.props.idx}> Popularity: {this.props.popularity}</h3>
            <img alt="No Movie Poster Found" src={`https://image.tmdb.org/t/p/w500/${this.props.image}`}></img>
            </>
        );
    }
}