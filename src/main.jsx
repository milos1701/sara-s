import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

import App from "@/app.jsx";
import Theme from "@/theme";

createRoot(document.getElementById("root")).render(
  <Theme>
    <BrowserRouter basename="/sara-s">
      <App />
    </BrowserRouter>
  </Theme>
);
