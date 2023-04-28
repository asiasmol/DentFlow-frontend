import React, {useContext, useEffect} from "react";
import {HomeContainer } from "./Profile.style";
import ClinicsTable from "./ClinicsTable";
import PersonalProfile from "./PersonalProfile";
import {UserContext} from "../../context/UserContext";
import {ClinicContext} from "../../context/ClinicContext";
import {ACCESS_TOKEN, CLINIC_ID, CLINIC_NAME} from "../../constants/constants";


export const Profile = () => {

    // const {userModifier} = useContext(UserContext)
    // const {clinicModifier} = useContext(ClinicContext)

    // useEffect(() => {
    //       localStorage.removeItem(ACCESS_TOKEN)
    //       localStorage.removeItem(CLINIC_NAME)
    //       localStorage.removeItem(CLINIC_ID)
    //       userModifier(null);
    //       clinicModifier(null);
    // }, [userModifier, clinicModifier])

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

