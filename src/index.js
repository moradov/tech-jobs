import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GloabalState from "../src/context/global/GlobalState";
const app = (
  <GloabalState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GloabalState>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
