import React from "react";
import ReactDOM from "react-dom";

import { applyMiddleware, createStore } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers/reducers';
  
import "./index.css";
import App from "./components/App";

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById("root")
);
