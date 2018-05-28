import { createStore, compose as origCompose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || origCompose;

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk))
);

export default store;