import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const reducer = () =>{
    return{
      count: 0
    }
  };

const store = createStore(reducer);
console.log(store)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


