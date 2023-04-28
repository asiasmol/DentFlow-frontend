import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {AddEmplyeeInput, SearchElement, SearchList} from "../../addEmployee/AddEmplyee.styles";
import {useCallback, useContext, useEffect, useState} from "react";
import {ClinicApi} from "../../../api/ClinicApi";
import {ClinicContext} from "../../../context/ClinicContext";
import {EmployeeResponse} from "../../../models/api/EmployeeResponse";
import {PatientResponse} from "../../../models/api/PatientResponse";
import { VisitApi } from '../../../api/VisitApi';
import {toast} from "react-toastify";


function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const theme = createTheme();

type Props = {
    date: string;
    time:string;
    handleModalClose:()=>void;
};

export default function SignIn(props:Props) {
    const [doctorFullName, setDoctorFullName] = useState("");
    const [doctorEmail, setDoctorEmail] = useState<string>("");
    const [doctorSearchResults, setDoctorSearchResults] = useState<EmployeeResponse[]>([]);
    const [doctors, setDoctors] = useState<EmployeeResponse[]>([]);
    const [patientId, setPatientId] = useState<number>(0);
    const [patientFullName, setPatientFullName] = useState("");
    const [patientSearchResults, setPatientSearchResults] = useState<PatientResponse[]>([]);
    const [patients, setPatients] = useState<PatientResponse[]>([]);
    const {currentClinic} = useContext(ClinicContext);

    function splitString(str: string): string[] | null {
        if (str.includes(" ")) {
            return str.split(" ");
        }
        return null;
    }
    function searchDoctor( firstName:string,lastName:string) {
            return doctors.filter((doctor) =>{
                const firstNameMatch = doctor.firstName.toLowerCase().includes(firstName.toLowerCase());
                const lastNameMatch = doctor.lastName.toLowerCase().includes(lastName.toLowerCase());

                if ( firstName === lastName)return firstNameMatch || lastNameMatch
                else return firstNameMatch && lastNameMatch
            });

    }
    function searchPatient( firstName:string,lastName:string) {

        return patients.filter((patient) =>{
            const firstNameMatch = patient.firstName.toLowerCase().includes(firstName.toLowerCase());
            const lastNameMatch = patient.lastName.toLowerCase().includes(lastName.toLowerCase());

            if ( firstName === lastName)return firstNameMatch || lastNameMatch
            else return firstNameMatch && lastNameMatch
        });
    }

    function doctorHandleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const searchTerm = event.target.value;
        setDoctorFullName(searchTerm)
        const result = splitString(searchTerm);
        let results: EmployeeResponse[] = [];
        if (result !== null) {
            const [firstWord, secondWord] = result;
            results = searchTerm ? searchDoctor(firstWord,secondWord) : [];
        } else {
            results = searchTerm ? searchDoctor( searchTerm , searchTerm) : [];
        }
        setDoctorSearchResults(results);
    }

    function patientHandleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const searchTerm = event.target.value;
        setPatientFullName(searchTerm)
        const result = splitString(searchTerm);
        let results: PatientResponse[] = [];
        if (result !== null) {
            const [firstWord, secondWord] = result;
            results = searchTerm ? searchPatient(firstWord,secondWord) : [];
        } else {
            results = searchTerm ? searchPatient( searchTerm , searchTerm) : [];
        }
        setPatientSearchResults(results);
    }

    function doctorHandleResultClick(result: EmployeeResponse) { // określenie typu parametru "result" na string
        setDoctorEmail(result.email);
        setDoctorFullName(result.firstName + " " + result.lastName)
        setDoctorSearchResults([]);
    }
    function patientHandleResultClick(result: PatientResponse) { // określenie typu parametru "result" na string
        setPatientId(result.patientId);
        setPatientFullName(result.firstName + " " + result.lastName)
        setPatientSearchResults([]);
    }
    const fetchDoctors= useCallback(async () => {
        try {
            const result = await ClinicApi.getDoctors({
                clinicId:currentClinic?.id
            });
            setDoctors(result.data)
        } finally {
            // setIsLoading(false);
        }
    }, [currentClinic?.id]);

    const fetchPatients= useCallback(async () => {
        try {
            const result = await ClinicApi.getPatients({
                clinicId:currentClinic?.id
            });
            setPatients(result.data)
        } finally {
            // setIsLoading(false);
        }
    }, [currentClinic?.id]);

    useEffect(() => {
        fetchDoctors();
        fetchPatients();
    }, [fetchDoctors,fetchPatients])
    const handleAppointment= useCallback(async () => {
        try {
            await VisitApi.add({
                clinicId:currentClinic?.id,
                visitDate:props.date,
                visitTime:props.time,
                doctorEmail:doctorEmail,
                patientId:patientId,
            })
            props.handleModalClose();
            toast.success("Dodano wizyte");
        } finally {
            // setIsLoading(false);
        }
    }, [patientId,doctorEmail,currentClinic?.id,props]);

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <AddEmplyeeInput
                            type="text"
                            value={doctorFullName}
                            placeholder="Search..."
                            onChange={doctorHandleInputChange}
                        />


                        <SearchList>
                            {doctorSearchResults.map((doctor) => (
                                <SearchElement key={doctor.email}  onClick={() => doctorHandleResultClick(doctor)}>
                                    {doctor.firstName +" "+doctor.lastName}
                                </SearchElement>
                            ))}

                        </SearchList>
                        <AddEmplyeeInput
                            type="text"
                            value={patientFullName}
                            placeholder="Search..."
                            onChange={patientHandleInputChange}
                        />


                        <SearchList>
                            {patientSearchResults.map((patient) => (
                                <SearchElement key={patient.patientId}   onClick={() => patientHandleResultClick(patient)}>
                                    {patient.firstName +" "+patient.lastName}
                                </SearchElement>
                            ))}

                        </SearchList>



                        <Button
                            fullWidth
                            variant="contained"
                            onClick={handleAppointment}
                            sx={{ mt: 3, mb: 2, bgcolor: '#78A6C8',
                                ':hover': {bgcolor: '#78A6C8'}}}
                        >
                            Umów
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />

            </Container>
        </ThemeProvider>
    );
}
