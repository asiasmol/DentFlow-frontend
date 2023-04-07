import { HomeContainer, StyledHeading} from "./MyClinic.styles";
import React from "react";
import {Outlet} from "react-router-dom";
import {ClinicResponse} from "../../models/api/ClinicResponse";

export const MyClinic: React.FC<ClinicResponse> = ( myClinic ) => {
  return (
      <>
          <HomeContainer>
              <StyledHeading>{myClinic.name}</StyledHeading>
          </HomeContainer>
          <Outlet/>
      </>
  );
};
