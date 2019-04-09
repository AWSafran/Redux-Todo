import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';



// const reducer = () =>{
//     return{
//       listItems: [{
//         text:"placeholder item",
//         completed: false,
//         id: 0
//     }]
//     }
//   };

const store = createStore(reducer);
console.log(store)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('root'));


