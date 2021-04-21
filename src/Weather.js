import React from 'react'

export default class Weather extends React.Component{
    render() {
        return(
            <>
                <h2> Date: {this.props.date}</h2>
                <h2> Description: {this.props.description}</h2>
            </>
        );
    }









}

