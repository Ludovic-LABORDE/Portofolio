import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeMenu: '',

}

const dataSlice = createSlice({
    name: "data",
    initialState: initialState,
    reducers: {
        setActiveMenu: (state, action) => {
            console.log(action)
            state.activeMenu = action.payload;
        }, 
    },
    // extraReducers: (builder) => {
    //     builder
    // },
});

export const { setActiveMenu } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;