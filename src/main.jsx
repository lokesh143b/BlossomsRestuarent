import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { MyContextProvider } from "./context/MyContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter> 
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </BrowserRouter>
);
