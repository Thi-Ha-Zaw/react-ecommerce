import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        GetCarts: (state, action) => {
            const { id } = action.payload
            console.log(id);
            const existedItem = state.carts.find(cart => cart.id === id)
            if (existedItem) {
                state.carts = state.carts
            } else {
                state.carts.push(action.payload)
            }
        },
        RemoveCart: (state, action) => {
           state.carts = state.carts.filter(cart => cart.id !== action.payload)
        },
        RemoveAllCart: (state) => {
            state.carts = []
        }
    }
})

export const { GetCarts,RemoveCart,RemoveAllCart } = cartSlice.actions;
export default cartSlice.reducer