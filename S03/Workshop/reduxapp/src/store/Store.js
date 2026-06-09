import { legacy_createStore } from "redux";
import nameReducer from "../reducers/nameReducer";

var store = legacy_createStore(nameReducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
