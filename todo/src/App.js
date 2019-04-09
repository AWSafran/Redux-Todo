import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import  { addItem } from './actions/App.js';
//import reducer from './reducer';
import ListItem from './components/ListItem';



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

    
    this.setState({
      inputForm: ''
    });

    this.props.addItem(newItem);

    //console.log(newItem);
  };

  handleChange = e =>{
    this.setState({[e.target.name]: e.target.value});
  };

  getClicked = (e, item) =>{
    console.log(e.target);
    console.log(item);
  }


  render() {
    //console.log(this.props);
    return (
      <div className="App">
        <form onSubmit={(e) =>this.submitForm(e)}>
          <input 
            type='text' 
            value={this.state.inputForm} 
            name='inputForm' 
            onChange={(e) => this.handleChange(e)} 
          />
          <button onClick={(e) =>this.submitForm(e)}>Add to list</button>
        </form>
        {this.props.listItems.map(item => <ListItem item={item}/>)}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  console.log(state);
  return{
    listItems: state.listItems
  }
}

export default connect(mapStateToProps, {addItem})(App);
