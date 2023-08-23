import React from "react";
import ReactDOM from "react-dom/client";
import Contact from "./components/pages/contact";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import contactReducer from "./lib/store";

const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Contact />
    </Provider>
  </React.StrictMode>
);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
