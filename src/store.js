// import { createStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import PasteReducer from "./redux/PasteSlice";

const store = configureStore({
  reducer: {
    paste: PasteReducer,
  }
})

export default store;