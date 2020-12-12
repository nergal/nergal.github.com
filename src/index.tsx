import React from "react";
import ReactDOM from "react-dom";
import Amplify from "aws-amplify";
import "./index.css";
import App from "./App";
import MApp from "./MApp";
import * as serviceWorker from "./serviceWorker";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

const Application = (() => {
  const isPresentsAllowed =
    window.location.search === "?m" &&
    !localStorage.getItem("presents-are-closed");
  return !isPresentsAllowed ? App : MApp;
})();

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
