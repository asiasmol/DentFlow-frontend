import React from "react";
import { AppContainer } from "./App.styles";
import { AppRouter } from "./router/App.router";
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
function App() {
  return (
      <AppContainer>
          <BrowserRouter>
              <AppRouter />
              <ToastContainer />
          </BrowserRouter>
      </AppContainer>
  );
}

export default App;
