import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: 'Counter',
    initialState:{
        Counter: 100,
        evenCounter: 0,
        oddCounter: 1
    },
    reducers:{
        incrementcounter: (state,action)=>{
            state.Counter = state.Counter+1
        },
        incrementevencounter:(state,action)=>{
            state.evenCounter = state.evenCounter+2
        },
        incrementoddcounter:(state,action)=>{
            state.oddCounter = state.oddCounter+1
        },
        resetcounter:(state,action)=>{
            state.Counter = 100;
            state.evenCounter = 0;
            state.oddCounter = 1;
        }
    }
})

export default slice.reducer
export const {incrementcounter,incrementevencounter,incrementoddcounter,resetcounter} = slice.actions