import React from 'react';
import WeatherDay from './weatherday.js';

class Weather extends React.Component {
    render() {
        console.log(this.props)
        return(  
            this.props.forecasts.map((day,idx) => (
                <WeatherDay date={day.date} description={day.description} key={idx}/>
            )
            )
        );
    }
}

export default Weather;
