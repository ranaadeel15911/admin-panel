import { createSlice } from "@reduxjs/toolkit";

// const initialState = false;
export const Loadingslice = createSlice({
    name: "loading",
    initialState : {
       load: false
    },
    reducers: {
        setLoading: (state, action) => {
            state.load = action.payload;
        },
    },
})

export const { setLoading } = Loadingslice.actions;

export default Loadingslice.reducer;