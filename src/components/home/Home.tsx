import { HomeContainer, StyledHeading} from "./Home.styles";
import React from "react";
import {Outlet} from "react-router-dom";

export const Home = () => {
  return (
      <>
          <HomeContainer>
              <StyledHeading>Hello</StyledHeading>
          </HomeContainer>
          <Outlet/>
      </>
  );
};
