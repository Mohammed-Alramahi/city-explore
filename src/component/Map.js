import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col,Card } from 'react-bootstrap';
class Map extends React.Component {
    render() {
        return (
            <div>
            {
                this.props.show&&
                <Row className="justify-content-md-center">
                    <Col className="mt-5" sm={3}>
                    <Card >
                        <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=f5de8e48adbdc6&center=${this.props.cityData.lat},${this.props.cityData.lon}`} />
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                Longtitude: {this.props.cityData.lon} <br/>
                                Latitude: {this.props.cityData.lat}
                         </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{this.props.cityData.display_name}</small>
                            
                        </Card.Footer>
                    </Card>
                    <Weather functionCall={this.state.show} cityName={this.state.cityName} lat={this.state.lat} lon={this.state.lon}/>
                    </Col>
                </Row>
            }
            </div>
        );
    }
}

export default Map;