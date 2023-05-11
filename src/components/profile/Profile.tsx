import React, {useEffect} from "react";
import {HomeContainer } from "./Profile.style";
import ClinicsTable from "./ClinicsTable";
import PersonalProfile from "./PersonalProfile";


export const Profile = () => {
  return (
      <>
      <HomeContainer>
          <PersonalProfile/>
          <ClinicsTable/>
      </HomeContainer>
      </>
  );
};



