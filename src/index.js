import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";

const nenad = createRoot(document.getElementById("root"));
nenad.render(<App />);
