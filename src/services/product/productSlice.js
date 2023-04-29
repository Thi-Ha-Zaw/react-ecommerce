import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    product: {},
    activeButtons: {},
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        GetProducts: (state, action) => {
            state.products = action.payload;
        },
        GetSingleProduct: (state, action) => {
            state.product = action.payload;
        },
        setActiveButton: (state, action) => {
            const { productId, active } = action.payload;
            state.activeButtons[productId] = active;
        },
        RemoveActiveButtons: state => {
            state.activeButtons = {};
        },
    },
});

export const {
    GetProducts,
    GetSingleProduct,
    setActiveButton,
    RemoveActiveButtons,
} = productSlice.actions;
export default productSlice.reducer;
