import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;