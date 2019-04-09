import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleItem } from '../actions/App.js';


class ListItem extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    handleClick = e =>{
        e.preventDefault();
        console.log("got clicked");
        this.props.toggleItem(this.props.item.id, this.props.item.completed)
    }

    render(){
        return(
            <div onClick={e => this.handleClick(e)}>{this.props.item.text}</div>
        )
    }
}


export default connect(null, {toggleItem})(ListItem)