import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./context/Context";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      {/* we use Contextprovider here so every coponents inside application can reach  context APi data  */}
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
