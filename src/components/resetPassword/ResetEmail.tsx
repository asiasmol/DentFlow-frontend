import React, {useCallback, useContext, useEffect, useRef, useState} from "react";
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
import {ACCESS_TOKEN, CLINIC_ID, CLINIC_NAME} from "../../constants/constants";
import {UnLoginPages} from "../../models/pages/UnLoginPages";
import {UserContext} from "../../context/UserContext";
import {NavbarContext} from "../../context/NavbarContext";



export const ResetEmail = () => {
    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState<boolean>(false);
    const [isRepeatedEmaildValid, setisRepeatedEmaildValid] = useState<boolean>(false);
    const{userModifier}=useContext(UserContext)
    const{pagesModifier}=useContext(NavbarContext)
    const navigate = useNavigate();
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    const useUrlQuery = () => {return new URLSearchParams(useLocation().search)}
    const queryRef = useRef<URLSearchParams>(useUrlQuery())
    const token = queryRef.current.get('token')
    const handleSubmit = useCallback(async () => {
        try {
            await AuthApi.ResetEmail({
                email:email,
                token:token});
            toast.success("Mail zoatał zmieniony ");
            navigate("/login");
            userModifier(null);
            localStorage.removeItem(ACCESS_TOKEN)
            localStorage.removeItem(CLINIC_NAME)
            localStorage.removeItem(CLINIC_ID)
            pagesModifier(UnLoginPages);
        } catch (error: any) {
            let errorMessage;
            if (error.response && error.response.status === 401) {
                errorMessage = "Taki Email Juz istnieje";
            }else if(error.response && error.response.status === 417){
                errorMessage = "Token wygasł";
            } else {
                errorMessage = "Wystąpił błąd podczas połączenia z serwerem.";
            }

            toast.error(errorMessage, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }, [email,navigate]);

    const onEmailChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setEmailValid(emailRegex.test(event.target.value));
        setEmail(event.target.value)
    }

    const onRepeatedEmailChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setisRepeatedEmaildValid(email === event.target.value);
    }

    return (
        <>
            {token ? (
                    <LoginForm height={28}>
                        <LoginHeader>
                            Resetowanie Maila
                        </LoginHeader>

                        <LoginInputs>
                            <StyledTextFieldMedium label="Email" type="email" size={"medium"} onChange={onEmailChange}/>
                            <StyledTextFieldSmall label="Email" type="email" size={"small"} onChange={onEmailChange}/>
                            <StyledTextFieldMedium label="Powtórz email" type="email" size={"medium"} onChange={onRepeatedEmailChange}/>
                            <StyledTextFieldSmall label="Powtórz email" type="email" size={"small"} onChange={onRepeatedEmailChange}/>
                            {!isRepeatedEmaildValid && email.length !== 0 && <ValidationError>eMaile nie są zgodne</ValidationError>}

                            <LoginButton onClick={handleSubmit} disabled={(!isRepeatedEmaildValid || !emailValid)}>
                                Zmień emaila
                            </LoginButton>


                        </LoginInputs>

                    </LoginForm>
            ) : (
                <NotFound />
                )}
        </>
    );
}
