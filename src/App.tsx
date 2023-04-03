import React from "react";
import { AppContainer } from "./App.styles";
import { AppRouter } from "./router/App.router";
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {withAxiosIntercepted} from "./hooks/withAxiosIntercepted";
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

export default withAxiosIntercepted(App);
