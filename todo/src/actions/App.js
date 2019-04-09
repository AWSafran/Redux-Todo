export const ADD_ITEM = "ADD_ITEM";
export const MARK_ITEM = "MARK_ITEM";
export const UNMARK_ITEM = "UNMARK_ITEM";


export const addItem = item =>{
    console.log(item);
    return{
        type: ADD_ITEM,
        payload: item
    };
};

export const toggleItem = (id, completed) =>{
    console.log(id, completed);

    if(completed){
        return{
            type: UNMARK_ITEM,
            payload: id
        }
    }
    else{
        console.log("should mark item");
        return{
            type: MARK_ITEM,
            payload: id
        }
    }
    
}
