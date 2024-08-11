import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "./initialState";

const initialState: InitialState = {
    isLoading: false,
    isError: false,
    data: [],
}

const fetchData = createSlice({
    name: 'fetchApi',
    initialState,
    reducers: {
        setLoading: state => {
            state.isLoading = true
        },
        setError: (state) => {
            state.isLoading = false;
            state.isError = true;
        },
        setSuccess: (state, action: PayloadAction<InitialState['data']>) => {
            state.isLoading = false;
            state.isError = false;
            state.data = action.payload
        }
    }
})

export const { setLoading, setError, setSuccess } = fetchData.actions
export default fetchData.reducer; 