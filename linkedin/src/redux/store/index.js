import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/index";

const store = configureStore({
  reducer: mainReducer,
});

export default store;
