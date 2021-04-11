import React, { Component } from 'react';

import Aux from '../hoc/Aux';
import QABlock from '../componants/QABlock/qablock';
import ReactPaginate from 'react-paginate';
import Pagination from "../lib/Pagination";
import axios from 'axios'

class BlockBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        questionblock: [{
            question:'what is the meaning of this verse',
            answer:'answer1'
        },
        {
            question:'why is my very difficucult to control',
            answer:'answer2'
        },
        {
            question:'question3',
            answer:'answer3'
        }
    ],
    blog:{
        question:'question5',
        answer:'answer5'
    },
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
        this.receivedData(this.state.offset)
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
    receivedData() {
        const offset = this.state.offset
        fetch(`http://localhost:8000/questions?offset=${offset}`)
            .then((response) => response.json())
            .then(questionList => {
                this.setState({ pageCount: Math.ceil(questionList['count'] / this.state.perPage)});
                this.setState({ questionblock: questionList['results'] });
            });
    }
    receivedData() {
        const offset = this.state.offset
        fetch(`http://localhost:8000/questions?offset=${offset}`)
            .then((response) => response.json())
            .then(questionList => {
                this.setState({ pageCount: Math.ceil(questionList['count'] / this.state.perPage)});
                this.setState({ questionblock: questionList['results'] });
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

    referance_to_link = (text) => {
        let book= text.split(" ")[0]
        let num= text.split(" ")[1]
        let chapter = num.split(".")[0]
        let sloka = num.split(".")[1]
        let link = 'https://vedabase.io/en/library/'+book.toLowerCase()+'/'+chapter+'/'+sloka
        return link
    }
    toggleshowanswer = (index) => {
       const currentList = this.state.activeList
        if(currentList.some(element => element === index)){
            currentList.pop(index)
        }
        else{
            currentList.push(index)
        }
        // console.log(this.state)
    //     if(this.state.showAnswer){ 
    //         this.setState({showAnswer:false})
    // }
    // else{
        this.setState({activeList:currentList})
    // }
    // console.log( this.state.activeList)
    }
    render () {
        
        return (
            <Aux>
               {this.state.questionblock.map((item, index) =>(
                    <QABlock blogs={item} block_index = {index} activelist={this.state.activeList} toggleanswer={this.toggleshowanswer} refereance={this.referance_to_link} hideanswer={this.state.showAnswer}/>
                ))}
                
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