import { createSlice } from "@reduxjs/toolkit";


const counterSlice=createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count++
        },
        decrement:(state)=>{
            state.count--
        },
        reset:(state)=>{
            return{...state,count:0}
        },
        incremeentByAmount:((state,action)=>{
            state.count+=action.payload
        })
    }
})

export const {increment,decrement,reset,incremeentByAmount}=counterSlice.actions
export default counterSlice.reducer