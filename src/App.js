import React from 'react';
import './App.css';
import Map from './component/Map';
import Movie from './component/Movie';
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
      weatherData:[],
      movieData:[]
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
      this.setMovieData();
    }
    catch (err) {
      this.setState({
        error: err.message,
        show:false
      });
    }
  
  }
  setWeatherData=async()=>{
  let APPHOST=process.env.REACT_APP_SERVER;
  let requestWeatherApi= await Axios.get(`${APPHOST}/weather?q=${this.state.cityNameQuery}&lon=${this.state.lon}&lat=${this.state.lat}`);
  let res= requestWeatherApi.data;
  this.setState({
   ...this.state,weatherData:res
  });

  }
setMovieData=async()=>{
  let APPHOST=process.env.REACT_APP_SERVER;
  let requestMovieApi= await Axios.get(`${APPHOST}/movies?q=${this.state.cityNameQuery}`);
  let res=requestMovieApi.data;
  this.setState({
    ...this.state,      
    movieData:res
   });
   console.log(res);
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
          <Movie show={this.state.show} movieData={this.state.movieData}/>
        </Row>
      </>
    );
  }
}

  export default App;
