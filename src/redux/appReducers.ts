import { combineReducers } from "redux";
import apiReducer from "./apiReducer";

 export const rootReducer = combineReducers({
     apiReducer : apiReducer
 })

export type RootState = ReturnType<typeof rootReducer>
