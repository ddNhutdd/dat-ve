import { createStore, combineReducers } from "redux";
import { datVeReducer } from "./dat-ve/dat-ve.reducer";
const rootReducer = combineReducers({
  datVeReducer,
});
export const store = createStore(rootReducer);
