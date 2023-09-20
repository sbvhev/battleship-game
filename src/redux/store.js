import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";

const enhancers = [];
const middleware = [];

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === "function") {
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, composedEnhancers);

export default store;
