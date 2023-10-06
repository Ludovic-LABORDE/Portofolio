import { createSlice } from "@reduxjs/toolkit";
import { language } from "../../../lang/language";



const initialState = {
    position: 1,
    project: language['fr'].Section.Project.Cosmokids.Inner[0],
    langage: 'fr'
}

const carousselSlice = createSlice({
    name: "caroussel",
    initialState: initialState,
    reducers: {
        switchProjectRight: (state, action) => {
            state.position === language[state.langage].Section.Project.Cosmokids.Inner.length ? state.position = 0 : "";
            state.position = state.position + 1;
            state.project = language[state.langage].Section.Project.Cosmokids.Inner[state.position - 1]

        },
        switchProjectLeft: (state, action) => {
            state.position = state.position - 1;
            state.position <= 0 ? state.position = 3 : "";
            state.project = language[state.langage].Section.Project.Cosmokids.Inner[state.position - 1]
        },
        setLangageCaroussel: (state, action) => {
            state.langage = '';
            state.langage = action.payload;
            state.project = language[state.langage].Section.Project.Cosmokids.Inner[0];

        }
    },
    // extraReducers: (builder) => {
    //     builder
    //     });
    // },
});

export const { switchProjectRight, switchProjectLeft, setLangageCaroussel } = carousselSlice.actions;
export const carousselReducer = carousselSlice.reducer;