import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth";

export const rootReducer = combineReducers({
  authReducer  
});
export type RootState = ReturnType<typeof rootReducer>;
