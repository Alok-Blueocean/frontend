import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class getSubThemes extends Component {

    state = {
        subthemes: [],
    
    }
    componentDidMount() {
        const id = this.props.match.params.theme_id
        this.receivedData(id)
    }
    receivedData(id) {
        fetch(`http://localhost:8000/parent/theme/${id}`)
            .then((response) => response.json())
            .then(questionList => {
                this.setState({ subthemes: questionList['results'] });
            });
            console.log(id);
            console.log(this.state.subthemes);
    }
    render () {
        
        return (
            
            <div>
               {this.state.subthemes.map((item, index) =>(
                   <Link to = {`/theme/${item.id}/question`} >
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

export default getSubThemes;