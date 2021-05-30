import React from 'react';
import Movie from './Movie';
import 'bootstrap/dist/css/bootstrap.min.css';
class Movies extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (<React.Fragment>

            <div style={{ marginLeft: 100 }}>
                {this.props.show && <h1>Movies:</h1>}

                {
                    this.props.show && this.props.movieData.map((item, count) => {
                        if (count < 10)
                            return <Movie title={item.title} overview={item.overview} key={count} date={item.released_on} />
                    })
                }
            </div>
        </React.Fragment>
        )




    }
}
export default Movies;

