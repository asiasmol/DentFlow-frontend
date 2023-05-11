import React, {useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import {toast} from "react-toastify";
import {
    LoginButton, LoginForm,
    LoginHeader,
    LoginInputs,

    StyledTextFieldMedium,
    StyledTextFieldSmall,
    ValidationError
} from "../login/Login.styles";
import {NotFound} from "../../pages/notFoundPage/NotFound";
import {AuthApi} from "../../api/AuthApi";



export const ResetPassword = () => {
    const [token, setToken] = useState<string|null>(null)
    const [password, setPassword] = useState('')
    const [hasLowercase, setHasLowercase] = useState<boolean>(true);
    const [hasUppercase, setHasUppercase] = useState<boolean>(true);
    const [hasSpecialChar, setHasSpecialChar] = useState<boolean>(true);
    const [hasDigit, setHasDigit] = useState<boolean>(true);
    const [hasLength, setHasLength] = useState<boolean>(true);
    const [isRepeatedPasswordValid, setIsRepeatedPasswordValid] = useState<boolean>(true);
    const [isDataValid, setIsDataValid] = useState<boolean>(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = useCallback(async () => {
        try {
            await AuthApi.ResetPassword({
                password:password,
                token:token});
            toast.success("Hasło Zresetowane ;D ");
            navigate("/login");
        } catch (error: any) {
            let errorMessage;
            if (error.response && error.response.status === 401) {
                errorMessage = "Podałeś błędne dane, spróbuj ponownie.";
            } else {
                errorMessage = "Wystąpił błąd podczas połączenia z serwerem.";
            }

            toast.error(errorMessage, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }, [token,password,navigate]);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        setToken(searchParams.get('token'))
        setIsDataValid((hasLength &&hasLowercase &&hasUppercase &&hasSpecialChar &&hasDigit && isRepeatedPasswordValid))
    }, [hasLength,hasLowercase,hasUppercase,hasSpecialChar,hasDigit,isRepeatedPasswordValid]);



    const onPasswordChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const uppercaseRegex: RegExp = /[A-Z]/;
        const lowercaseRegex: RegExp = /[a-z]/;
        const specialCharRegex: RegExp = /[!@#$%^&*]/;
        const digitRegex: RegExp = /\d/;
        setHasLength(password.length>7)
        setHasLowercase(lowercaseRegex.test(password));
        setHasUppercase(uppercaseRegex.test(password));
        setHasSpecialChar(specialCharRegex.test(password));
        setHasDigit(digitRegex.test(password));
        if(event.target.value===""){
            setHasLength(true);
            setHasLowercase(true);
            setHasUppercase(true);
            setHasSpecialChar(true);
            setHasDigit(true);
            setIsDataValid(false)
        }
        setPassword(event.target.value)
    }

    const onRepeatedPasswordChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setIsRepeatedPasswordValid(password === event.target.value);
    }


    return (
        <>
            {token ? (
                    <LoginForm height={28}>
                        <LoginHeader>
                            Resetowanie Hasła
                        </LoginHeader>

                        <LoginInputs>
                            <StyledTextFieldMedium label="Hasło" type="password" size={"medium"} onChange={onPasswordChange}/>
                            <StyledTextFieldSmall label="Hasło" type="password" size={"small"} onChange={onPasswordChange}/>
                            {!hasLowercase &&<ValidationError> mała litera</ValidationError>}
                            {!hasUppercase &&<ValidationError> duża litera</ValidationError>}
                            {!hasSpecialChar &&<ValidationError> znak Specjalny</ValidationError>}
                            {!hasDigit &&<ValidationError> cyfra</ValidationError>}
                            {!hasLength &&<ValidationError> minimum 8 znaków</ValidationError>}

                            <StyledTextFieldMedium label="Powtórz hasło" type="password" size={"medium"} onChange={onRepeatedPasswordChange}/>
                            <StyledTextFieldSmall label="Powtórz hasło" type="password" size={"small"} onChange={onRepeatedPasswordChange}/>
                            {!isRepeatedPasswordValid && password.length !== 0 && <ValidationError>Hasła nie są zgodne</ValidationError>}

                            <LoginButton onClick={handleSubmit} disabled={!isDataValid}>
                                Resetuj Hasło
                            </LoginButton>


                        </LoginInputs>

                    </LoginForm>
            ) : (
                <NotFound />
                )}
        </>
    );
}
