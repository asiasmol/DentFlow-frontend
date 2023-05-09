import React, {useEffect, useState} from "react";
import {UserApi} from "../../api/UserApi";
import {UserRegistrationData} from "../../models/api/UserRegistrationData";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {
    LoginButton, LoginForm,
    LoginHeader,
    LoginInputs,
    PasswordRecoveryLabel,
    StyledTextFieldMedium,
    StyledTextFieldSmall,
    ValidationError
} from "../login/Login.styles";
import { Grid, Link } from "@mui/material";


const UserRegistration = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [repeatedPassword, setRepeatedPassword] = useState('')
    const [telNumber, setTelNumber] = useState('')
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
    const [isRepeatedPasswordValid, setIsRepeatedPasswordValid] = useState<boolean>(true);
    const [isDataValid, setIsDataValid] = useState<boolean>(false);


    const navigate = useNavigate();
    const handleSubmit = () => {
        let user: UserRegistrationData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            telNumber: telNumber
        }
        UserApi.registerUser(user).then(r => {
        })
        toast.success("Poprawnie zarejestrowano");
        navigate("/login");
    }

    useEffect(() => {
        setIsRepeatedPasswordValid(validateRepeatedPassword(repeatedPassword));
        setIsEmailValid(validateEmail(email));
        setIsPasswordValid(validatePassword(password));
        setIsDataValid((isPasswordValid && isEmailValid && isRepeatedPasswordValid))
    }, [repeatedPassword, email, password, isPasswordValid, isEmailValid,  isRepeatedPasswordValid]);

    const validateRepeatedPassword = (repeatedPassword: string) => {
        return password === repeatedPassword;
    };
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password: string) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        return passwordRegex.test(password);
    }


    return (
        <LoginForm height={55}>

            <LoginHeader>
                Rejestracja
            </LoginHeader>

            <LoginInputs>
                <StyledTextFieldMedium label="Imię" size={"medium"} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)}/>
                <StyledTextFieldSmall label="Imię" size={"small"} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)}/>

                <StyledTextFieldMedium label="Nazwisko" size={"medium"} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)}/>
                <StyledTextFieldSmall label="Nazwisko" size={"small"} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)}/>

                <StyledTextFieldMedium label="Email" size={"medium"} type="email" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}/>
                <StyledTextFieldSmall label="Email" size={"small"} type="email" onChange={(event: React.ChangeEvent<HTMLInputElement> )=> setEmail(event.target.value)}/>
                {!isEmailValid && (<ValidationError>Podaj poprawny adres email</ValidationError>)}


                <StyledTextFieldMedium label="Hasło" type="password" size={"medium"} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}/>
                <StyledTextFieldSmall label="Hasło" type="password" size={"small"} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}/>
                {!isPasswordValid && (<ValidationError>Hasło musi mieć co najmniej 8 znaków i zawierać jedną cyfrę, jedną małą i jedną dużą literę</ValidationError>)}

                <StyledTextFieldMedium label="Powtórz hasło" type="password" size={"medium"} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRepeatedPassword(event.target.value)}/>
                <StyledTextFieldSmall label="Powtórz hasło" type="password" size={"small"} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRepeatedPassword(event.target.value)}/>
                {!isRepeatedPasswordValid && (<ValidationError>Hasła nie są zgodne</ValidationError>)}

                <StyledTextFieldMedium label="Numer telefonu" type="tel" size={"medium"} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)}/>
                <StyledTextFieldSmall label="Numer telefonu" type="tel" size={"small"} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)}/>

                <LoginButton onClick={handleSubmit} disabled={!isDataValid}>
                    Dołącz
                </LoginButton>

                <PasswordRecoveryLabel container color={"white"}>
                    <Grid>
                        <Link href="#" variant="body2">
                            Nie pamiętasz hasła?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="/login" variant="body2">
                            {"Masz już u nas konto? Zaloguj się "}
                        </Link>
                    </Grid>
                </PasswordRecoveryLabel>

            </LoginInputs>

        </LoginForm>

    );




}
export default UserRegistration;