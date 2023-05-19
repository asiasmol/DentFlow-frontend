import React, {useContext} from "react";
import ClinicsTable from "./ClinicsTable";
import OwnerProfileData from "./OwnerProfileData"
import PersonalProfile from "./PersonalProfile";
import {UserContext} from "../../context/UserContext";
import { HomeContainer } from "./Profile.styles";


export const Profile = () => {
    const {currentUser} = useContext(UserContext)
  return (
      <>
      <HomeContainer>
          <PersonalProfile/>
          {currentUser?.roles.includes("DOCTOR") &&<ClinicsTable/>}
          {currentUser?.roles.includes("OWNER")&&<OwnerProfileData />}
          {!currentUser?.roles.includes("OWNER")&&!currentUser?.roles.includes("DOCTOR")&&<>todo</>}
      </HomeContainer>
      </>
  );
};



