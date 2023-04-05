import React, {useState} from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import './Registration.style';
import {StyledBox, WelcomeText, WindowRegistration, Fields} from "./Registration.style";


const UserRegistration = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [repeatedPassword, setRepeatedPassword] = useState('')
    const [telNumber, setTelNumber] = useState('')

    const handleSubmit = () => {
        console.log("Nastąpi rejestracja użytkownika " + firstName + ' ' + lastName + ' ' + email + ' ' + password + ' ' + telNumber)
    }

    return (
        <WindowRegistration>
            <StyledBox>
                <WelcomeText>Utwórz konto</WelcomeText>
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
                        required
                        id="password"
                        label="Hasło"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                        onChange={event => setPassword(event.target.value)}
                    />
                    <TextField
                        required
                        id="repeatedPassword"
                        label="Powtórz hasło"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                        onChange={event => setRepeatedPassword(event.target.value)}
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
export default UserRegistration;