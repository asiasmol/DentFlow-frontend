import React, {useCallback, useContext, useState} from "react";
import {StyledBox, WelcomeText, WindowRegistration, Fields} from "./AddPatient.styles";
import {ClinicContext} from "../../context/ClinicContext";
import {PatientApi} from "../../api/PatientApi";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {Button, TextField } from "@mui/material";

export const AddPatient = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const {currentClinic} = useContext(ClinicContext)
    const navigate = useNavigate();
    const PatientRegistration = useCallback(async () => {
        try {
            await PatientApi.register({
                clinicId: currentClinic?.id as 0,
                firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNumber: phoneNumber
            })
            toast.success("Dodano Pacjenta");
            navigate("/clinic");
        } catch (error: any) {

        }
    },[currentClinic?.id, email, firstName, lastName, phoneNumber,navigate])

    return (
        <WindowRegistration>
            <StyledBox>
                <WelcomeText>Dodaj Pacjenta</WelcomeText>
                <Fields>
                    <TextField
                        required
                        id="firstName"
                        label="Imię"
                        variant="standard"
                        onChange={(event) => setFirstName(event.target.value)}
                    />

                    <TextField
                        required
                        id="lastName"
                        label="Nazwisko"
                        variant="standard"
                        onChange={(event) => setLastName(event.target.value)}
                    />
                    <TextField
                        required
                        id="email"
                        label="Email"
                        type='email'
                        variant="standard"
                        onChange={event => setEmail(event.target.value)}
                    />

                    <TextField
                        id="telNumber"
                        label="Numer telefonu"
                        type="tel"
                        variant="standard"
                        onChange={event => setPhoneNumber(event.target.value)}
                    />

                </Fields>

                <Button onClick={PatientRegistration} fullWidth={true}> Zarejestruj </Button>

            </StyledBox>
        </WindowRegistration>

    );


}