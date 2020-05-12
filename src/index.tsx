import React from "react";
import ReactDOM from "react-dom";
import { Auth, Analytics } from "aws-amplify";
import { amplifyConfig, analyticsConfig } from './aws-config';
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

Auth.configure(amplifyConfig);
Analytics.configure(analyticsConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
