import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice.js"

const store = configureStore({
    reducer : {
        counterReducer,
       
    }
});

export default store