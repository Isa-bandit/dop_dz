import {configureStore} from "@reduxjs/toolkit";
import { productsReducer } from "./productsSlice";
import {cartReducer} from "./cartSlice";


export const store= configureStore(
    {
        reducer:{
            goods:productsReducer,
            cart:cartReducer
        }
    }
)