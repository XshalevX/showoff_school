import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
import { HashRouter } from "react-router-dom";
=======
import { BrowserRouter } from "react-router-dom";
>>>>>>> 5c2f2e687fbceaddc75ce93e108cbab43abb0c55

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
<<<<<<< HEAD
    <HashRouter>
      <App />
    </HashRouter>
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>
>>>>>>> 5c2f2e687fbceaddc75ce93e108cbab43abb0c55
  </StrictMode>
);