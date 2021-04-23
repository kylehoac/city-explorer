import React from 'react';
import WeatherDay from './weatherday.js';

class Weather extends React.Component {
    render() {
        return(  
            this.props.forecasts.map((day,idx) => (
                <WeatherDay date={day.date} description={day.description} idx={idx}/>
            )
            )
        );
    }
}

export default Weather;
