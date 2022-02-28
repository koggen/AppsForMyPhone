import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import appsReducer from "./reducers/appsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  apps: appsReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;