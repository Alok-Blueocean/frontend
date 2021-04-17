import React from 'react';
import Aux from '../../hoc/Aux';
import './qablock.css';
import { Accordion, Card } from "react-bootstrap";

const qablock = (props) => {
  
  let answer = null;
  let referance_to_link = (text) => {
    let book= text.split(" ")[0]
    let num= text.split(" ")[1]
    let chapter = num.split(".")[0]
    let sloka = num.split(".")[1]
    let link = 'https://vedabase.io/en/library/'+book.toLowerCase()+'/'+chapter+'/'+sloka
    return link
}

  if(props.activelist.indexOf(props.blogs.question_id)>=0){
    answer = (
    <div className="panel">
        <p>{props.blogs.answer_text}</p>
        <a href={referance_to_link(props.blogs.shloka.referance_text)}>
            {props.blogs.shloka.referance_text}</a>
    </div>
          );
  }

  return (
    <Aux>
        {/* <div className='list-group list-group-flush'>
            <div className='list-group-item list-group-item-action'>
               <summary> 
                 <button className="accordion" 
               onClick={props.toggleanswer}>
                 {props.blogs.question_text}
                 </button>
                </summary>
                {answer} 
            </div>
        </div>  */}
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={props.blogs.question_id}>
          {props.blogs.question_text}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={props.blogs.question_id}>
            <Card.Body>{props.blogs.answer_text}</Card.Body>
          </Accordion.Collapse>
        </Card>
        </Aux>)
        /* <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      {props.blogs.question}
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
          <strong>{props.blogs.answer}</strong>
        </div>
    </div>
  </div>
  </div>  */
                };

export default qablock;