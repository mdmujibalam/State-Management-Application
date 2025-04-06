import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";

export const toolKitStore= configureStore({
    reducer: {
        counter:counterReducer
    }
});
