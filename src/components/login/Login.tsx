import React, {useCallback, useContext, useEffect, useState} from "react";
import {
    LoginInputs,
    LoginForm,
    LoginHeader,
    ValidationError,
    StyledTextFieldMedium,
    StyledTextFieldSmall,
    LoginButton,
    RememberMeLabel,
    PasswordRecoveryLabel
} from "./Login.styles";
import {AuthApi} from "../../api/AuthApi";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {ACCESS_TOKEN} from "../../constants/constants";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../context/UserContext";
import {Checkbox, Link, Grid} from "@mui/material";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const {userModifier} = useContext(UserContext);

  const navigate = useNavigate();

  const onLoginClicked = useCallback(async () => {
    try {
      const user = await AuthApi.signIn({
        email: email,
        password: password,
      });
      userModifier({
        email: user.data.email,
        roles: user.data.roles,
      });
      localStorage.setItem(ACCESS_TOKEN, user.data.token);
      navigate("/my-clinic");
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
  }, [email,userModifier, password, navigate]);


  useEffect(() => {
    setIsEmailValid(validateEmail(email));
  }, [email]);

  useEffect(() => {
    setIsPasswordValid(password.length > 0);
  }, [password]);

  const onEmailChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
      <LoginForm height={32}>
        <LoginHeader>
          Logowanie
        </LoginHeader>

        <LoginInputs>
          <StyledTextFieldMedium label="Email" size={"medium"} value = {email} onChange={(e) => onEmailChange(e)}/>
          <StyledTextFieldSmall label="Email" size={"small"} value = {email} onChange={(e) => onEmailChange(e)}/>
          {!isEmailValid && (<ValidationError>Podaj poprawny adres email</ValidationError>)}

          <StyledTextFieldMedium onChange={(e) => onPasswordChange(e)} label="Hasło" type="password" size={"medium"}/>
          <StyledTextFieldSmall onChange={(e) => onPasswordChange(e)} label="Hasło" type="password" size={"small"}/>
          {!isPasswordValid && <ValidationError>Podaj hasło</ValidationError>}

          <RememberMeLabel control={<Checkbox value="remember" color="primary" />} label="Zapamiętaj mnie"/>

          <LoginButton disabled={!isEmailValid || !isPasswordValid} onClick={onLoginClicked}>
            Zaloguj
          </LoginButton>

          <PasswordRecoveryLabel container color={"white"}>
            <Grid>
              <Link href="#" variant="body2">
                Nie pamiętasz hasła?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/user-registration" variant="body2">
                {"Nie masz konta? Dołącz do nas."}
              </Link>
            </Grid>
          </PasswordRecoveryLabel>

        </LoginInputs>

      </LoginForm>

  );
};
