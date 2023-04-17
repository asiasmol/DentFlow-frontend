import React, {useContext} from "react";
import {ClinicContext} from "../../context/ClinicContext";
import {HomeContainer, StyledHeading} from "../clinic/MyClinic/MyClinic.styles";
import Table from "../clinic/MyClinic/Table";
import {Outlet} from "react-router-dom";
import PatientsTable from "./PatientsTable";

const PatientsList = () => {
    const {currentClinic } = useContext(ClinicContext);

    return(
        <>
            <HomeContainer>
                <StyledHeading>{currentClinic?.name}</StyledHeading>
                <StyledHeading>Pacjenci:</StyledHeading>
                <PatientsTable/>
            </HomeContainer>
            <Outlet/>
        </>
    )
}

export default PatientsList;