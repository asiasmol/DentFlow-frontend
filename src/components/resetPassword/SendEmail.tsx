import React, {useCallback, useEffect, useState} from "react";
import {
    LoginInputs,
    LoginForm,
    LoginHeader,
    ValidationError,
    StyledTextFieldMedium,
    StyledTextFieldSmall,
    LoginButton,
    LoginP,
    Loader,

} from "../login/Login.styles";
import {AuthApi} from "../../api/AuthApi";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";


export const SendEmail = () => {
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onResetClicked = useCallback(async () => {
    try {
        setIsLoading(true);
        await AuthApi.SendResetEmail({email:email});
        toast.success("Wiadomość wysłana :D ");
        navigate("/");
    } catch (error: any) {
      let errorMessage;
      if (error.response && error.response.status === 401) {
        errorMessage = "Podałeś błędne dane, spróbuj ponownie.";
      } else {
        errorMessage = "Wystąpił błąd podczas połączenia z serwerem.";
      }
      toast.error(errorMessage, {
        position: toast.POSITION.TOP_RIGHT,
      })

    } finally {
        setIsLoading(false);
    }

  }, [email, navigate]);


  useEffect(() => {
    setIsEmailValid(validateEmail(email));
  }, [email]);

  const onEmailChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setEmail(event.target.value);
  };



  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
      <>
      {isLoading ? (
          <Loader ></Loader>
      ):(
          <LoginForm height={20}>
              <LoginHeader>
                  Podaj swój adres e-mail
              </LoginHeader>
              <LoginP>
                  Odzyskanie Hasłą zaczyna się od adresu e-mail powiązanego z twoim kontem.
              </LoginP>
              <LoginInputs>
                  <StyledTextFieldMedium label="Email" size={"medium"} value = {email} onChange={(e) => onEmailChange(e)}/>
                  <StyledTextFieldSmall label="Email" size={"small"} value = {email} onChange={(e) => onEmailChange(e)}/>
                  {!isEmailValid && email.length !== 0 && (<ValidationError>Podaj poprawny adres email</ValidationError>)}
                  <LoginButton disabled={!isEmailValid} onClick={onResetClicked}>
                      Wyślij Email
                  </LoginButton>
              </LoginInputs>
          </LoginForm>
          )}
      </>
  );
};
