import React from "react";
import { AppContainer } from "./App.styles";
import { AppRouter } from "./router/App.router";
import {ToastContainer} from "react-toastify";
import {withAxiosIntercepted} from "./hooks/withAxiosIntercepted";
import {UserContextProvider} from "./context/UserContext";
import {Footer} from "./components/footer/Footer";

function App() {
  return (
      <AppContainer>
          <UserContextProvider>
              <AppRouter />
              <Footer/>
              <ToastContainer />
          </UserContextProvider>
      </AppContainer>
  );
}

export default withAxiosIntercepted(App);
