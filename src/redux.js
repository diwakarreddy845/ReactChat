import { createStore } from "redux";
import { reducers } from "./reducer/reducer";

// store.js
export function configureStore(initialState = {}) {
  debugger;
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore();
