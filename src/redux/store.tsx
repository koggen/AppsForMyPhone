import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
const { logger } = require(`redux-logger`);

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));