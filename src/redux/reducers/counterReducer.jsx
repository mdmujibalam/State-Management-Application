import { INCREASE_BY_ONE, INCREASE_BY_VALUE, DECREASE_BY_ONE, DECREASE_BY_VALUE } from "../actions/types";

const initialState={
 count:0
};

const CounterReducer= (state=initialState, action)=>{

 switch(action.type){
    case INCREASE_BY_ONE : return {...state, count: state.count+1};

    case DECREASE_BY_ONE : return {...state, count: state.count-1};

    case INCREASE_BY_VALUE : return {...state, count: state.count+action.value};

    case DECREASE_BY_VALUE : return {...state, count: state.count-action.value};

    default: return {...state};
    
 }

};

export default CounterReducer;