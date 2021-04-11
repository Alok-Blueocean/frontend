import React from 'react';
import Aux from '../../hoc/Aux';
import './qablock.css';

const qablock = (props) => {
  
  let answer = null;

  if(props.activelist.indexOf(props.block_index)>=0){
    answer = (
    <div className="panel">
        <p>{props.blogs.answer_text}</p>
        <a href={props.refereance(props.blogs.shloka.referance_text)}>
            {props.blogs.shloka.referance_text}</a>
    </div>
          );
  }

  return (
    <Aux>
        <div className='list-group list-group-flush'>
            <div className='list-group-item list-group-item-action'>
               <summary> 
                 <button className="accordion" 
               onClick={()=>props.toggleanswer(props.block_index)}>
                 {props.blogs.question_text}
                 </button>
                </summary>
                {answer} 
            </div>
        </div> 
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