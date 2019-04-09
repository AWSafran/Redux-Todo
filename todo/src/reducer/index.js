import {ADD_ITEM} from '../actions/App.js';

const initialState = {
    listItems: [{
        text:"placeholder item",
        completed: false,
        id: 0
    }]
};

const reducer = (state = initialState, action) =>{
    console.log('made it to reducer')
    console.log(action);

    switch (action.type){
        case ADD_ITEM:
            return{
                ...state,
                listItems: [
                    ...state.listItems, 
                    action.payload
                ]
            }
    }
    return state;
};

export default reducer;

