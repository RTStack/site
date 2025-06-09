import { configureStore } from "@reduxjs/toolkit";

import quickViewReducer from "./features/quickView-slice";
import cartReducer from "./features/cart-slice";
import wishlistReducer from "./features/wishlist-slice";
import productDetailsReducer from "./features/product-details";

import { TypedUseSelectorHook, useSelector } from "react-redux";

// 🔥 Load initial cart from localStorage
const loadCartFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("Gagal load cart dari localStorage", e);
      return [];
    }
  }
  return [];
};

const preloadedState = {
  cartReducer: {
    items: loadCartFromLocalStorage(),
  },
};

export const store = configureStore({
  reducer: {
    quickViewReducer,
    cartReducer,
    wishlistReducer,
    productDetailsReducer,
  },
  preloadedState,
});

// Simpan cart ke localStorage saat ada perubahan
store.subscribe(() => {
  const state = store.getState();
  if (typeof window !== "undefined") {
    try {
      const serialized = JSON.stringify(state.cartReducer.items);
      localStorage.setItem("cart", serialized);
    } catch (e) {
      console.error("Gagal simpan cart ke localStorage", e);
    }
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
