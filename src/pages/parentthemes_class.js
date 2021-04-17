import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class getParentThemes extends Component {

    state = {
        parentthemes: [],
    
    }
    componentDidMount() {
        this.receivedData()
    }
    receivedData() {
        fetch(`http://localhost:8000/parent/theme`)
            .then((response) => response.json())
            .then(questionList => {
                this.setState({ parentthemes: questionList['results'] });
            });
    }
    render () {
        
        return (
            
            <div>
               {this.state.parentthemes.map((item, index) =>(
                   <Link to = {`/parent/theme/${item.id}`} >
                    <div  class="thumbnail">
                    <img src="http://placehold.it/100x100" alt="image" />
                      <div class="caption">
                        <h4>{item.name}</h4>
                    </div>
                  </div>
                  </Link>
                     
                     
                ))}
            </div>
            
        );
    }
}

export default getParentThemes;