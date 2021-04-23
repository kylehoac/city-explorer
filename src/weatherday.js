import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default class WeatherDay extends React.Component{
    render(){
        return(
            <ListGroup.Item key={this.props.idx}>
                {`${this.props.date} ${this.props.description}`}
            </ListGroup.Item>
        )
    }
}