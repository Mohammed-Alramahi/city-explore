import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<React.Fragment>

            <div>
                {this.props.show && <h1>Movies:</h1>}

                {
                    this.props.show && this.props.movieData.map((item, idx) => {
                        return (<div className="text-primary" key={idx}><h6>title:</h6> {item.title} <h6>description:</h6> {item.overview}
                            <h6>release date:</h6> {item.released_on}</div>)
                    })
                }
            </div>
        </React.Fragment>
        )




    }
}
export default Weather;

