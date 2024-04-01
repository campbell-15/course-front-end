import { createSlice } from '@reduxjs/toolkit';

const CounterSlice = createSlice({
    name: "",
    initialState: {
        count: 0
    },
    reducer: {
        increment(state) {
            state.count += 1
        },
        decrement(state) {
            state.count -= 1
        },
        reset(state) {
            state.count = 0
        }
    }
})

export default CounterSlice