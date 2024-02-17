import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import SearchProvider from "./providers/SearchProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SearchProvider>
        <RouterProvider router={router}></RouterProvider>
      </SearchProvider>
    </Provider>
  </React.StrictMode>
);
