import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Movie extends React.Component {
    render() {
        return (
            <div style={{ marginBottom: 50 }}>
                <div className="text-primary"><h6>title: {this.props.title}</h6>
                <img src={this.props.image} width="350" height="300" alt={this.props.title}/>
                <p>description: {this.props.overview}</p>
                    <h6>release date: {this.props.date}</h6>
                </div>
            </div>
        )
    }
}
export default Movie;

