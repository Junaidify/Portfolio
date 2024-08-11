import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "./initialState";

// Define the initial state
const initialState: InitialState = {
    isLoading: false,
    isError: false,
    data: [],
};


const fetchData = createSlice({
    name: 'fetchApi',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<boolean>) => {
            state.isLoading = false;
            state.isError = action.payload;
        },
        setSuccess: (state, action: PayloadAction<InitialState['data']>) => {
            state.isLoading = false;
            state.isError = false;
            state.data = action.payload;
        }
    }
});

export const { setLoading, setError, setSuccess } = fetchData.actions;
export default fetchData.reducer;
