import React, {useContext} from "react";
import {HomeContainer } from "./Profile.style";
import ClinicsTable from "./ClinicsTable";
import OwnerProfileData from "./OwnerProfileData"
import PersonalProfile from "./PersonalProfile";
import {UserContext} from "../../context/UserContext";


export const Profile = () => {
    const {currentUser} = useContext(UserContext)
  return (
      <>
      <HomeContainer>
          <PersonalProfile/>
          {currentUser?.roles.includes("DOCTOR") &&<ClinicsTable/>}
          {currentUser?.roles.includes("OWNER")&&<OwnerProfileData />}
          {/*{currentUser?.roles.includes("")&&<>todo</>}*/}
      </HomeContainer>
      </>
  );
};



