import React, { Component } from 'react';

import Aux from '../hoc/Aux';
import QABlock from '../componants/QABlock/qablock';
// import ReactPaginate from 'react-paginate';
import Pagination from "../lib/Pagination";
// import axios from 'axios'
import Accordion from 'react-bootstrap/Accordion'

class BlockBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        question_answer_block: [
            // {
        //     question:'what is the meaning of this verse',
        //     answer:'answer1'
        // },
        // {
        //     question:'why is my very difficucult to control',
        //     answer:'answer2'
        // },
        // {
        //     question:'question3',
        //     answer:'answer3'
        // }
    ],
    
    showAnswer: false,
    activeList:[],
    offset: 0,
    data: [],
    perPage: 5,
    currentPage: 0
    }
    componentDidMount() {
        // fetch('http://localhost:8000/questions')
        // .then((response) => response.json())
        // .then(questionList => {
        //     this.setState({ questionblock: questionList['results'] });
        // });
        const id = this.props.match.params.theme_id
        this.receivedData(id)
    }
    // URL = `http://localhost:8000/questions?offset=${offset}`;

    // handleFetch = () => {
	// 	fetch(URL)
    //     .then((response) => response.json())
    //     .then(questionList => {
    //         this.setState({ questionblock: questionList['results'] });
    //     });
	// };
    changeCurrentPage = numPage => {
        const offset = numPage * this.state.perPage;
        this.setState({
            currentPage: numPage,
            offset: offset
        }, () => {
            this.receivedData()
        },
        );
    };

    receivedData(id) {
        const offset = this.state.offset
        fetch(`http://localhost:8000/theme/${id}/question?offset=${offset}`)
            .then((response) => response.json())
            .then(questionList => {
                this.setState({ pageCount: Math.ceil(questionList['count'] / this.state.perPage)});
                this.setState({ question_answer_block: questionList['results'] });
            });
    }
    
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        },
        );

    };

   
    toggleshowanswer = (id) => {
       const currentList = [...this.state.activeList]
        if(currentList.some(element => element === id)){
            currentList.pop(id)
        }
        else{
            currentList.push(id)
        }
        // console.log(this.state)
    //     if(this.state.showAnswer){ 
    //         this.setState({showAnswer:false})
    // }
    // else{
        this.setState({activeList:currentList})
    // }
    }
    render () {
        
        return (
            <Aux>
                <Accordion defaultActiveKey="0">
               {this.state.question_answer_block.map((item, index) =>(
                    <QABlock blogs={item}
                      activelist={this.state.activeList} 
                      toggleanswer={()=>this.toggleshowanswer(item.question_id)} 
                      key={item.question_id}
                      />
                ))}
                </Accordion>
                {/* <div>
              <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
                </div> */}
                <Pagination
                                currentPage={this.state.currentPage}
                                totalSize={this.state.pageCount*this.state.perPage}
                                sizePerPage={this.state.perPage}
                                changeCurrentPage={this.changeCurrentPage}
                                theme="circle"
    
                            />
            </Aux>
        );
    }
}

export default BlockBuilder;