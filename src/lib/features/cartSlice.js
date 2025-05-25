import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  completedOrders: [], // Array to store completed orders
  lastOrderTimestamp: null, // Track the last order timestamp
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.id !== action.payload);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    addToCompletedOrders: (state, action) => {
      const currentTime = Date.now();
      // Prevent duplicate orders within a 2-second window
      if (!state.lastOrderTimestamp || currentTime - state.lastOrderTimestamp > 2000) {
        const newOrder = {
          id: `ORD${currentTime}`,
          date: new Date().toISOString(),
          items: [...state.items],
          totalAmount: action.payload.totalAmount,
          status: 'Delivered',
          deliveryAddress: action.payload.deliveryAddress,
        };
        state.completedOrders.push(newOrder);
        state.lastOrderTimestamp = currentTime;
      }
    },
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  clearCart,
  addToCompletedOrders 
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotalAmount = (state) => 
  state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
export const selectCompletedOrders = (state) => state.cart.completedOrders;

export default cartSlice.reducer; 