import React from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';
class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            day1: '',
            day2:'',
            day3:'',
            functionCall: this.props.functionCall
        }
    }
    getApiData = async () => {
        let APPHOST = process.env.REACT_APP_SERVER;
        let cityName = this.props.cityName;
        let lon = Math.round(this.props.lon);
        let lat = Math.round(this.props.lat);
        let result = await Axios.get(`${APPHOST}/weather?q=${cityName}&lon=${lon}&lat=${lat}`);
        this.setState({
            day1: result.data.data[0],
            day2:result.data.data[1],
            day3:result.data.data[2],
        })
        console.log(APPHOST, this.state.data);
    }
    callGetApiData = () => {
        if (this.state.functionCall) {
            this.getApiData();
            this.setState({
                functionCall: false
            })
        }
    }

    render() {
        this.callGetApiData();
        return (
            <>
            <p>{this.state.day1.date}</p>
            <p>{this.state.day1.description}</p>
            <p>{this.state.day2.date}</p>
            <p>{this.state.day2.description}</p>
            <p>{this.state.day3.date}</p>
            <p>{this.state.day3.description}</p>
            </>

        )
    }
}
export default Weather;



{/* <div className="users">
             {
                 
                data.forEach(item=>{
                    <div>
                    <p>{item.description}</p>
                    <p>{item.description}</p>
                    </div>
                })
               
             }
            </div> */}