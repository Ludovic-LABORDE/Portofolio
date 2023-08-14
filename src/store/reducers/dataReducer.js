import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active: ''
}

const dataSlice = createSlice({
    name: "data",
    initialState: initialState,
    reducers: {
        setActive: (state, action) => {
            console.log(action)
            state.active = action.payload;
        }
    },
    // extraReducers: (builder) => {
    //     builder
    // },
});

export const { setActive } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;