import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleItem } from '../actions/App.js';


class ListItem extends Component {
    constructor(props){
        super(props);
        //console.log(props);
    }

    handleClick = e =>{
        e.preventDefault();
        //console.log("got clicked");
        this.props.toggleItem(this.props.item.id, this.props.item.completed)
    }



    render(){

        let doneSpan = null;

        if (this.props.item.completed){
            console.log("should be marked as done")
            doneSpan = (<span>Done!</span>)
        }

        return(
            <div>
                <div className={`completedIs${this.props.item.completed}`}onClick={e => this.handleClick(e)}>{this.props.item.text}</div>{doneSpan}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return state;
}


export default connect(mapStateToProps, {toggleItem})(ListItem)