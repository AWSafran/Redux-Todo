import {ADD_ITEM, MARK_ITEM, UNMARK_ITEM} from '../actions/App.js';

const initialState = {
    listItems: [{
        text:"placeholder item",
        completed: false,
        id: 0
    }]
};

const reducer = (state = initialState, action) =>{
    console.log('made it to reducer')

    switch (action.type){
        case ADD_ITEM:
            return{
                ...state,
                listItems: [
                    ...state.listItems, 
                    action.payload
                ]
            };
        case MARK_ITEM:
            console.log("made it to mark item");
            const newArray = state.listItems.map(item =>{
                if (item.id === action.payload){
                    item.completed = true;
                }
                return item;
            })
            return{
                ...state,
                listItems: newArray
            };
        case UNMARK_ITEM:
        const newerArray = state.listItems.map(item =>{
            if (item.id === action.payload){
                item.completed = false;
            }
            return item;
        });
            return{
                ...state,
                listItems: newerArray
            };
        default:
            return state;
    }
};

export default reducer;

