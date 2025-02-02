import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


const loadCartFromLocalStorage = () => {
    try {
        const serializedCart = localStorage.getItem("cart");
        return serializedCart ? JSON.parse(serializedCart) : { cartItems: [], totalQuantity: 0, totalPrice: 0 };
    } catch (error) {
        console.error("Error loading cart from localStorage:", error);
        return { cartItems: [], totalQuantity: 0, totalPrice: 0 };
    }
};

const saveCartToLocalStorage = (cart) => {
    try {
        localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
        console.error("Error saving cart to localStorage:", error);
    }
};

const initialState = loadCartFromLocalStorage();

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, name, quantity, weight, price, totalPrice, img } = action.payload;

            const existingItem = state.cartItems.find(item => item.id === id && item.weight === weight);

            if (existingItem) {
                existingItem.quantity += quantity;
                existingItem.totalPrice += totalPrice;
            } else {
                state.cartItems.push({
                    id,
                    name,
                    quantity,
                    weight,
                    price,
                    totalPrice,
                    img
                });
            }

            state.totalQuantity += quantity;
            state.totalPrice += totalPrice;
            saveCartToLocalStorage(state); 
            toast.success(`${name} added to cart!`);
        },

        removeFromCart: (state, action) => {
            const { id, weight } = action.payload;

            const existingItemIndex = state.cartItems.findIndex(item => item.id === id && item.weight === weight);

            if (existingItemIndex !== -1) {
                const item = state.cartItems[existingItemIndex];

                state.totalQuantity -= item.quantity;
                state.totalPrice -= item.totalPrice;

                state.cartItems.splice(existingItemIndex, 1);
                toast.success(`${item.name} removed from cart!`);
            }

            saveCartToLocalStorage(state); 
        },

        updateQuantity: (state, action) => {
            const { id, weight, newQuantity } = action.payload;
            const item = state.cartItems.find(item => item.id === id && item.weight === weight);

            if (item) {
                const quantityDifference = newQuantity - item.quantity;
                const priceDifference = item.price * quantityDifference;

                item.quantity = newQuantity;
                item.totalPrice += priceDifference;
                state.totalQuantity += quantityDifference;
                state.totalPrice += priceDifference;
                toast.success(`Updated quantity of ${item.name} to ${newQuantity}`);
            }

            saveCartToLocalStorage(state); 
        },

        clearCart: (state) => {
            state.cartItems = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;

            saveCartToLocalStorage(state); 
             toast.success("Cart cleared successfully!");
        }
    }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
