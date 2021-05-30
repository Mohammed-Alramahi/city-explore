import React from 'react';
class Weather extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.weatherData);
    }

    render() {
        return (<React.Fragment>
             <ul>
             {this.props.show && <h1>Forecast:</h1>}
                {
                    this.props.show && this.props.weatherData.map((item,day)=>{
                       if(day<3)
                        return (<li key={day}><h5>day:{day+1} date: {item.date}, description: {item.description}</h5></li>)
                    })
                }
                </ul>
            </React.Fragment> 
        )
        
           
        
        
    }
}
export default Weather;

