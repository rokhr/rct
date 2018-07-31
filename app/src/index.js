import React from "react";
import ReactDOM from "react-dom";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import App from "./views/app";
import './index.css';

ReactDOM.render(
    // <HashRouter>
        <App />,
    // </HashRouter>,
    document.getElementById("root")
);
