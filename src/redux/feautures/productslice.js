import { createSlice } from "@reduxjs/toolkit";

// const initialState = false;
export const productslice = createSlice({
    name: "productslice",
    initialState : {
        id:"",
        imgSrc:"",
        fileKey:"",
        name:"",
        category:"",
        price:"",
    },
    reducers: {
        setProduct: (state, action) => {
           return  action.payload;
        },
    },
})

export const { setProduct } = productslice.actions;

export default productslice.reducer;