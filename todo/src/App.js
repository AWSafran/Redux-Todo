import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import  { addItem } from './actions/App.js';



class App extends Component {

  constructor(props){
    super(props);
    this.state={
      inputForm: '',
    }
  }

  submitForm = e =>{
    e.preventDefault();
    //console.log(`attempting to submit ${this.state.inputForm}`)
    const newItem={
      text: this.state.inputForm,
      completed: false,
      id: Date.now()
    }

    this.props.addItem(newItem);
    //console.log(newItem);
  }

  handleChange = e =>{
    this.setState({[e.target.name]: e.target.value});
  }


  render() {
    //console.log(this.props);
    return (
      <div className="App">
        <form onSubmit={(e) =>this.submitForm(e)}>
          <input 
            type='text' 
            value={this.state.formValue} 
            name='inputForm' 
            onChange={(e) => this.handleChange(e)} 
          />
        </form>
        {this.props.listItems.map(item => <div key={item.id}>{item.text}</div>)}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  //console.log(state);
  return{
    listItems: state.listItems
  }
}

export default connect(mapStateToProps, {addItem})(App);
