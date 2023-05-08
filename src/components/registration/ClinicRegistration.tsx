import React, {useCallback, useContext, useEffect, useState} from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import './Registration.style';
import {StyledBox, WelcomeText, WindowRegistration, Fields} from "./Registration.style";
import {ClinicApi} from "../../api/ClinicApi";
import {UserContext} from "../../context/UserContext";
import {useNavigate} from "react-router-dom";
import {
    LoginButton,
    LoginForm,
    LoginHeader,
    LoginInputs,
    StyledTextFieldMedium,
    StyledTextFieldSmall, ValidationError
} from "../login/Login.styles";
import {color} from "@chakra-ui/react";

const ClinicRegistration = () => {
    const [clinicName, setClinicName] = useState('');
    const [email, setEmail] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [ownerLastname, setOwnerLastname] = useState('');
    const [isEmailValid, setEmailValid] = useState<boolean>(false)
    const [city, setCity] = useState('');
    const [address, setAdress] = useState('');
    const [password, setPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    const [isPasswordValid, setPasswordValid] = useState<boolean | null>(false)
    const {currentUser, userModifier} = useContext(UserContext);
    const navigate = useNavigate();

    const [isFormValid, setFormValid] = useState<boolean>(false)

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const registerClinic = useCallback(async () => {
        try {
            await ClinicApi.register({
                clinicName: clinicName,
                ownerName: ownerName,
                ownerLastname: ownerLastname,
                city: city,
                address: address,
                email: email,
                password: password,

            });
            // currentUser?.roles.push("OWNER")
            // userModifier(currentUser);
            navigate("/")
        } catch (error: any) {

        }
    }, [clinicName, city, address, email, password, navigate]);

    useEffect(() => {
        setEmailValid(email.match(emailRegex) !== null)
    }, [email])

    useEffect(() => {
        setFormValid(clinicName.length >= 2 && city.length >= 2 && address.length >= 2 && ownerName.length >= 2 && ownerLastname.length >= 2);
    }, [clinicName, city, address]);


    useEffect(() => {
        setPasswordValid(password === secondPassword && password.length >= 8)
    }, [password, secondPassword])
    const onClinicNameChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setClinicName(event.target.value)
    }
    const onOwnerNameChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setOwnerName(event.target.value)
    }
    const onOwnerLastnameChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setOwnerLastname(event.target.value)
    }

    const onCityChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCity(event.target.value)
    }
    const onStreetChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAdress(event.target.value)
    }
    const onEmailChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEmail(event.target.value)
    }
    const onPasswordChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    const onSecondPasswordChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setSecondPassword(event.target.value)
    }


    return (

        <LoginForm height={60}>
            <LoginHeader>
                Załóż przychodnię
            </LoginHeader>


            <LoginInputs>

                <StyledTextFieldMedium label='Nazwa przychodni' size={"medium"} value={clinicName}
                                       onChange={onClinicNameChange}/>
                <StyledTextFieldSmall label='Nazwa przychodni' size={"small"} value={clinicName}
                                      onChange={onClinicNameChange}/>

                <StyledTextFieldMedium label='Imię właściciela' size={"medium"} value={ownerName}
                                       onChange={onOwnerNameChange}/>
                <StyledTextFieldSmall label='Imię właściciela' size={"small"} value={ownerName}
                                      onChange={onOwnerNameChange}/>

                <StyledTextFieldMedium label='Nazwisko właściciela' size={"medium"} value={ownerLastname}
                                       onChange={onOwnerLastnameChange}/>
                <StyledTextFieldSmall label='Nazwisko właściciela' size={"small"} value={ownerLastname}
                                      onChange={onOwnerLastnameChange}/>

                <StyledTextFieldMedium label='Miasto' size={"medium"} value={city} onChange={onCityChange}/>
                <StyledTextFieldSmall label='Miasto' size={"small"} value={city} onChange={onCityChange}/>

                <StyledTextFieldMedium label='Adres' size={"medium"} value={address} onChange={onStreetChange}/>
                <StyledTextFieldSmall label='Adres' size={"small"} value={address} onChange={onStreetChange}/>

                <StyledTextFieldMedium label="Email" size={'medium'} value={email} onChange={onEmailChange}/>
                <StyledTextFieldSmall label="Email" size={'small'} value={email} onChange={onEmailChange}/>
                {!isEmailValid && email.length != 0 && <ValidationError>Błędny adres Email</ValidationError>}

                <StyledTextFieldMedium label="Hasło" size={'medium'} type='password' value={password}
                                       onChange={onPasswordChange}/>
                <StyledTextFieldSmall label="Hasło" size={'small'} type='password' value={password}
                                      onChange={onPasswordChange}/>
                {password.length < 8 && password.length != 0 &&
                    <ValidationError>Hasło jest zbyt krótkie</ValidationError>}

                <StyledTextFieldMedium label="Powtórz Hasło" size={'medium'} type='password' value={secondPassword}
                                       onChange={onSecondPasswordChange}/>
                <StyledTextFieldSmall label="Powtórz Hasło" size={'small'} type='password' value={secondPassword}
                                      onChange={onSecondPasswordChange}/>
                {!isPasswordValid && secondPassword.length != 0 &&
                    <ValidationError>Hasła nie są takie same</ValidationError>}

                <LoginButton disabled={!isEmailValid || !isPasswordValid || !isFormValid} onClick={registerClinic}>
                    Zarejestruj
                </LoginButton>
            </LoginInputs>

        </LoginForm>
    )
}


export default ClinicRegistration;