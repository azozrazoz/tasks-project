import React from "react";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";

import store from './store'

import Router from "./Router";

function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <Router />
      </SnackbarProvider>
    </Provider>
  );
}

export default App;
