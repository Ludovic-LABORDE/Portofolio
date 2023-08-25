import { dataReducer } from "./reducers/dataReducer";
import { carousselReducer } from "./reducers/caroussel";
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        data: dataReducer,
        caroussel: carousselReducer,
    },
    devTools: true,
});

export default store;