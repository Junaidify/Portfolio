import { configureStore } from "@reduxjs/toolkit";
import fetchDataReducer from "./reducer"; 

export const store = configureStore({
    reducer: {
        fetch: fetchDataReducer,
    },
})