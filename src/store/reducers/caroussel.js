import { createSlice } from "@reduxjs/toolkit";
import { Project } from "../../components/Section/Project/project";
const initialState = {
    position: 1,
    project: Project[0]
}

const carousselSlice = createSlice({
    name: "caroussel",
    initialState: initialState,
    reducers: {
        switchProjectRight: (state, action) => {
            state.position ===  Project.length ? state.position = 0 : "";
            state.position = state.position + 1;
            state.project = Project[state.position - 1]
        },
        switchProjectLeft: (state, action) => {
            state.position = state.position - 1  ;
            state.position <= 0 ? state.position = 3 : "";
            state.project = Project[state.position - 1]
        }
    },
    // extraReducers: (builder) => {
    //     builder
    // },
});

export const { switchProjectRight, switchProjectLeft } = carousselSlice.actions;
export const carousselReducer = carousselSlice.reducer;