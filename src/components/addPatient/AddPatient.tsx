import React, {useState} from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {StyledBox, WelcomeText, WindowRegistration, Fields} from "./AddPatient.styles";
import {PatientResponse} from "../../models/api/PatientResponse";

export const AddPatient = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [telNumber, setTelNumber] = useState('')

    const handleSubmit = () => {
        let patient: PatientResponse = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            telNumber: telNumber
        }
        // UserApi.registerUser(user).then(r => {
        // })
    }

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
                        onChange={event => setTelNumber(event.target.value)}
                    />

                </Fields>

                <Button onClick={handleSubmit} fullWidth={true}> Zarejestruj </Button>

            </StyledBox>
        </WindowRegistration>

    );


}