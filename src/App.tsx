import React from "react";
import { AppContainer } from "./App.styles";
import { AppRouter } from "./router/App.router";
import {BrowserRouter} from "react-router-dom";
function App() {
  return (
      <AppContainer>
          <BrowserRouter>
              <AppRouter />
          </BrowserRouter>
      </AppContainer>
  );
}

export default App;
