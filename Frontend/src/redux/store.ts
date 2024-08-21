import { configureStore } from "@reduxjs/toolkit";
import fetchDataReducer from "./reducer"; 
import { thunk } from "redux-thunk";

export const store = configureStore({
    reducer: {
        fetch: fetchDataReducer,
    },
    middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware().concat(thunk),
})