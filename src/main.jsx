import {createRoot} from "react-dom/client";

import App from "@/app.jsx";
import Theme from "@/theme";

createRoot(document.getElementById("root")).render(
  <Theme>
    <App />
  </Theme>
);
