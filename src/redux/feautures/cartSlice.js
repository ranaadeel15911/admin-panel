import { createSlice } from "@reduxjs/toolkit"

const initialState = []
export const cartSlice = createSlice({
    name:"cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // state.push(action.payload);
if (state.findIndex((pro)=> pro.id === action.payload.id) === -1) {
/* this up line ensure that the new item is not already present in cart means here findIndex  */    
    state.push(action.payload)
}
else{
   return  state.map((item)=>{
return  item.id === action.payload.id ? {...item, quantity: item.quantity + 1 } : item;
    })
}
        },
        removeFromCart: (state, action) => {
            const id = action.payload
            return state.filter(item => item.id !== id)
        },
        clearCart: (state, action) => {
           return state = []
        },
        increment: (state, action) => {
            console.log(action.payload)
            const index = action.payload;
            state[index].quantity++;
        },
        decrement: (state, action) => {
            const index = action.payload;
            if (state[index].quantity > 0) {
                state[index].quantity--;
            }
        }
    
}
})

export const { addToCart, removeFromCart, clearCart ,increment,decrement} = cartSlice.actions;

export default cartSlice.reducer;