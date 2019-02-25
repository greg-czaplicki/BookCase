import { createStore } from "redux";
import booksReducer from "../reducers/books";

const store = () => {
  return createStore(booksReducer);
};

export default store;
