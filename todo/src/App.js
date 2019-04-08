import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import  { addItem } from './actions/App.js';



class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1>{this.props.count}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  console.log(state);
  return{
    count: state.count
  }
}

export default connect(mapStateToProps, {addItem})(App);
