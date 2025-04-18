import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ProviderTree } from "./providers";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProviderTree>
        <App />
      </ProviderTree>
    </BrowserRouter>
  </React.StrictMode>
);
