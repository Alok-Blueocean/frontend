import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ThemeQuestion extends Component {

    state = {
        questionblock: [],
    
    }
    componentDidMount() {
        const id = this.props.match.params.theme_id
        this.receivedData(id)
    }
    receivedData(id) {
        fetch(`http://localhost:8000/theme/${id}/question`)
            .then((response) => response.json())
            .then(questionList => {
                this.setState({ questionblock: questionList['results'] });
            });
            console.log(id);
            console.log(this.state.questionblock);
    }
    render () {
        
        return (
            
            <div>
               {this.state.questionblock.map((item, index) =>(
                   <Link to = {`/questions/${item.id}`} >
                    <div  class="thumbnail">
                    <img src="http://placehold.it/100x100" alt="image" />
                      <div class="caption">
                        <h4>{item.question_text}</h4>
                    </div>
                  </div>
                  </Link>
                     
                     
                ))}
            </div>
            
        );
    }
}

export default ThemeQuestion;