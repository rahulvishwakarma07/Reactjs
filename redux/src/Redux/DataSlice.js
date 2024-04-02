import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'Dataslice',
    initialState:{
        a:20,
        b:10
    }
})


export default slice.reducer

