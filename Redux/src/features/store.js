import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer/slices";

export const store = configureStore({
    reducer: todoReducer
});