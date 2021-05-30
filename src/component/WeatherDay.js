import React from 'react';
class WeatherDay extends React.Component {
    render() {
        return (
            <li><h5>day:{this.props.day + 1}, date: {this.props.date}, description: {this.props.description}</h5></li>
        )
    }
}
export default WeatherDay;

