import React from "react";
import { AppContainer } from "./App.styles";
import { AppRouter } from "./router/App.router";
import {ToastContainer} from "react-toastify";
import {withAxiosIntercepted} from "./hooks/withAxiosIntercepted";
import {UserContextProvider} from "./context/UserContext";

function App() {
  return (
      <AppContainer>
          <UserContextProvider>
              <AppRouter />
              <ToastContainer />
          </UserContextProvider>
      </AppContainer>
  );
}

export default withAxiosIntercepted(App);
