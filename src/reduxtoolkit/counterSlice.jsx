import { createSlice } from "@reduxjs/toolkit";

const counterSlice= createSlice({
    name: "myCounter",
    initialState: {count:0},
    reducers: {
       increaseByOne(state, action){
         return {...state, count:state.count+1};
       },

       decreaseByOne(state,action){
        return {...state, count:state.count-1};
       },

       increaseByValue(state,action){
        //console.log("action", action);
        return {...state, count:state.count+action.payload};
       },

       decreaseByValue(state,action){
        return {...state, count:state.count-action.payload};
       }

    }
})

export const {increaseByOne, decreaseByOne, increaseByValue, decreaseByValue} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;