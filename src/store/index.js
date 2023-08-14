import { dataReducer } from "./reducers/dataReducer";
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        data: dataReducer
    },
    devTools: true,
});

export default store;