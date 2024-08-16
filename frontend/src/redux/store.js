import { createStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";

const store = createStore(rootReducers);

export default store;
