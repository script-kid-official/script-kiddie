import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppStore from "context/AppContext";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter basename="/app/">
    <AppStore>
      <App />
    </AppStore>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.register();
