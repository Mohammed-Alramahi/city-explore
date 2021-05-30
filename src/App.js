import React from 'react';
import './App.css';
import Map from './component/Map';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import { Form, Button, Row, Col,Card } from 'react-bootstrap';
import Weather from './component/Weather';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: '',
      cityNameQuery: '',
      show: false,
      lan:0,
      lat:0,
      error: '',
      weatherData:[]
    }
  }
  setCityName = (e) => {
    this.setState({
      ...this.state,cityNameQuery: e.target.value
    });
    console.log(this.state.cityNameQuery);
  }
  getCityData = async (e) => {
    e.preventDefault();
    let url = `https://eu1.locationiq.com/v1/search.php?key=pk.8dd2131eff40d7a7114d9cf644c29a91&q=${this.state.cityNameQuery}&format=json`
    try {

      let cities = await Axios.get(url);
      let res = cities;
      this.setState({
        ...this.state,
        cityData: res.data[0],
        show: true,
        lat:res.data[0].lat,
        lon:res.data[0].lon,
      });
      this.setWeatherData();
    }
    catch (err) {
      this.setState({
        error: err.message,
        show:false
      });
    }
  
  }
  setWeatherData=async()=>{
  let appHost=process.env.REACT_APP_HOST;
  let requestWeatherApi= await Axios.get(`http://localhost:3300/weather?q=${this.state.cityNameQuery}&lon=${this.state.lon}&lat=${this.state.lat}`);
  let res= requestWeatherApi.data;
  this.setState({
   ...this.state,weatherData:res
  });
  /*  this.setState((prev)=>{
    let newRes = {
      day1:res[0],
      day2:res[1],
      day3:res[2],
      weatherData:res
     }
     this.setState({ ...prev,newRes})
  }) */
    this.setState()
   console.log(this.state.weatherData);
  }


  render() {
    return (
      <>
        <Row className="justify-content-md-center">
          <Col className="mt-5" sm={5}>
            <Form onSubmit={this.getCityData}>
              <Form.Group>
                <Form.Label>City Name</Form.Label>
                <Form.Control className="mb-3" type="text" onChange={this.setCityName} placeholder="Enter City Name" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
          </Col>
          <Map show={this.state.show} cityData={this.state.cityData}/>
          <Weather show={this.state.show} weatherData={this.state.weatherData}/>
        </Row>
      </>
    );
  }
=======
import Weather from './component/Weather';
function App() {
  return (
    <div className="App">
      <Map />
    </div>
  );
>>>>>>> 0555dd42d88e100269a99f3aa0cabb8511c52c4f
}

  export default App;
