import { configureStore } from "@reduxjs/toolkit";
import Loadingslice from "./feautures/loadingslice"
import productslice from "./feautures/productslice"
import cartslice from "./feautures/cartSlice"
// import { persistReducer } from 'redux-persist';
// import { combineReducers } from 'redux';
// import storage from 'redux-persist/lib/storage';
// const persistConfig = {
//     key:"root",
//     versin:1,
//     storage
// }
// const reducers = combineReducers({
//     cartslice,
// Loadingslice,
// productslice,
// })
// const persistedReducer = persistReducer(persistConfig, reducers)
// export const store = configureStore({
//     reducer:persistedReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//         serializableCheck: false
//     })
// })
export const store = configureStore({
    reducer:{
cartslice,
Loadingslice,
productslice,
    },
    devTools:process.env.NODE_ENV !== 'production'
})


