import React from "react";
import {HomeContainer, StyledHeading, } from "./Profile.style";
import ClinicsTable from "./ClinicsTable";
import {containerClasses} from "@mui/material";
import PersonalProfile from "./PersonalProfile";


export const Profile = () => {
  return (
      <>
      <HomeContainer>

          <PersonalProfile/>
          <ClinicsTable/>
      </HomeContainer>
      </>
      // <StyledHeading>Profile</StyledHeading>

  );
};

