import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "./User/Context/ShoppingCartContext.tsx";

// import './index.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ShoppingCartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ShoppingCartProvider>
);
