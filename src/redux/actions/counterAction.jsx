import { INCREASE_BY_ONE, INCREASE_BY_VALUE, DECREASE_BY_ONE, DECREASE_BY_VALUE } from "./types";

export const increaseByOne = ()=>{
 return {type:INCREASE_BY_ONE};
};

export const decreaseByOne = ()=>{
    return {type:DECREASE_BY_ONE};
};

export const increaseByValue = (value)=>{
return {type:INCREASE_BY_VALUE, value}
};

export const decreaseByValue = (value)=>{
    return {type:DECREASE_BY_VALUE, value}
};