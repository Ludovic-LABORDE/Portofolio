import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeMenu: '',
    activeBackgound: false,

}

const dataSlice = createSlice({
    name: "data",
    initialState: initialState,
    reducers: {
        setActiveMenu: (state, action) => {
            state.activeMenu = action.payload;
        }, 
        setActiveBackground: (state, action) => {
            state.activeBackgound = action.payload;
        }
    },
    // extraReducers: (builder) => {
    //     builder
    // },
});

export const { setActiveMenu, setActiveBackground } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;