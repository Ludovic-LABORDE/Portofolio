import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeMenu: '',
    activeBackgound: false,
    langage: "en"

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
        },
        setLangage: (state, action) => {
            state.langage = action.payload;
        }   
    },
    // extraReducers: (builder) => {
    //     builder
    // },
});

export const { setActiveMenu, setActiveBackground, setLangage } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;