import React from 'react';
class Weather extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.weatherData);
    }

    render() {
        return (<React.Fragment>
             <ul>
                {
                    this.props.show && this.props.weatherData.map(item=>{
                         return (<li>date: {item.date}, description: {item.description}</li>)
                    })
                }
                </ul>
            </React.Fragment> 
        )
        
           
        
        
    }
}
export default Weather;

