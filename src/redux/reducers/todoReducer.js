import * as actionTypes from "../actions/actionTypes";

const todoReducer = (state=0,action) => {
    let todoList = [];
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return (todoList.a)
        case actionTypes.REMOVE_TODO:
            return (todoList.state)
        case actionTypes.ADD_TODO:
            return (todoList = [])
        
    
        default:
            break;
    }
}