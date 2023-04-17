import React, { useContext, useEffect} from "react";
import {Outlet} from "react-router-dom";
import {NavbarContext} from "../../context/NavbarContext";
import {DoctorPages} from "../../models/pages/DoctorPages";
import {HomeContainer, StyledHeading} from "./Clinic.styles";
import {VisitTable} from "./VisitTable";
import {ClinicContext} from "../../context/ClinicContext";


export const Clinic = () => {
    const {pagesModifier } = useContext(NavbarContext);
    const {currentClinic} = useContext(ClinicContext);


    useEffect(() => {
        pagesModifier(DoctorPages);
    }, [pagesModifier]);

  return (
      <>
          <HomeContainer>
              <StyledHeading>{currentClinic?.name}</StyledHeading>
              <StyledHeading>Wizyty</StyledHeading>
              <VisitTable />
          </HomeContainer>
          <Outlet/>
      </>
  );
};
