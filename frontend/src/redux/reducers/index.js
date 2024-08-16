import {combineReducers} from "@reduxjs/toolkit"
import addItem from "./addItem";

const rootReducers = combineReducers({
    addItem,
});

export default rootReducers;
