import { createStore } from "redux";
import { charDetails } from "./reducer";
import { combineReducers } from "redux";

const reducercombined = combineReducers({ charDetails });

export const store = createStore(reducercombined);
