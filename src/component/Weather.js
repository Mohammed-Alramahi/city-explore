import React from 'react';
import WeatherDay from './WeatherDay';
class Weather extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let listStyle = {
            color: "#ff4520",
            marginLeft: 100,
            listStyle: "square"
        }
        return (<React.Fragment>
            <ul style={listStyle}>
                {this.props.show && <h1>Forecast:</h1>}
                {
                    this.props.show && this.props.weatherData.map((item, day) => {
                        if (day < 7)
                            return <WeatherDay key={day} day={day} date={item.date} description={item.description} />
                    })
                }
            </ul>
        </React.Fragment>
        )
    }
}
export default Weather;

