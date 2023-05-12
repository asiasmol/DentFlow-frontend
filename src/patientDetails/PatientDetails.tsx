import { useLocation } from 'react-router-dom';
import {useContext, useEffect, useState} from "react";
import {ClinicContext} from "../context/ClinicContext";
import {PatientApi} from "../api/PatientApi";

function PatientDetails() {
    const location = useLocation();
    const { patient } = location.state;
    const {currentClinic} = useContext(ClinicContext);
    const [patientInfo, setPatientInfo] = useState();

    useEffect(() => {
        PatientApi.getVisitInfo({
            patientId: patient.patientId,
            clinicId: currentClinic?.id
        })
    }, [])



    return (
        <div>
            <h2>Informacje o pacjencie:</h2>
            <p>Imię: {patient.firstName}</p>
            <p>Nazwisko: {patient.lastName}</p>
            <p>Email: {patient.email}</p>
            <p>Klinika: {currentClinic?.name}</p>
            <p>Klinika: {currentClinic?.id}</p>
            <p>{patient.patientId}</p>
        </div>
    );
}
export default PatientDetails;