// import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from 'axios'
import Weather from './Weather.js'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      error: {},
      isError: false,
      weather: {},
      movies: [],
    }
  };

  getMovies = async () => {
    const apiUrl = `https://city---explorer.herokuapp.com/movies?cityName=${this.state.searchQuery}`;
    
    const response = await axios.get(apiUrl);

    return this.setState({
      movies: response.data,
    });
  }
  getLocation = async () => {
    try {
      const apiUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER_KEY}&q=${this.state.searchQuery}&format=json`;
                      
      const response = await axios.get(apiUrl);

      const backendUrl = `https://city---explorer.herokuapp.com/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}`;
    
      const weatherResponse = await axios.get(backendUrl);
      
      this.setState({ 
        location: response.data[0],
        isError: false,
        weather: weatherResponse.data[0]
      });
      this.getMovies();
    } catch (error) {
      this.setState({ 
        error,
        isError: true,
        location: "",
      });
    }
  }
  renderMovies() {
    return this.state.movies.map((movie, idx) => {
      return(
        <>
        <h2 key={idx}>{movie.name}</h2>
        <h3 key={idx}>{movie.overview}</h3>
        <h3 key={idx}> Popularity: {movie.popularity}</h3>
        {/* <p> Image : https://image.tmdb.org/t/p/w500/{movie.image}</p> */}
        <img alt="Movie poster" src={`https://image.tmdb.org/t/p/w500/${movie.image}`}></img>
        </>
      )
    })
  }
  render() {
    const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=<zoom>&size=${window.innerWidth}x300&format=<format>&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>`
    return (
      <>
        <input id="form" onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="Enter a city name"></input>

        <Button id="formButton" onClick={this.getLocation}>Explore</Button>
        {this.state.isError &&
            <h1 className="mt-3 text-black"> ERROR!: {this.state.error.message}</h1>
        }
        {this.state.location.place_id &&
          <>
            <h2> The city is: {this.state.location.display_name}</h2>
            <h2> The latitude is: {this.state.location.lat}</h2>
            <h2> The longitude is: {this.state.location.lon}</h2>
            <Weather
              date={this.state.weather.date}
              description={this.state.weather.description}    
            />
            <img src={mapUrl} alt="location" id="map" />
            <h1> Movies: {this.renderMovies()}</h1>
          </>
        }
      </>
    )
  }
}
