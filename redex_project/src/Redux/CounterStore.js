import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";



const counterStore=configureStore({
    reducer:{
        counterReducer:CounterSlice

    }
})
 export default counterStore 
