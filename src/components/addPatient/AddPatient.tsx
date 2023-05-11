import React, {useCallback, useContext, useState} from "react";
import {ClinicContext} from "../../context/ClinicContext";
import {PatientApi} from "../../api/PatientApi";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {
    LoginButton,
    LoginForm,
    LoginHeader,
    LoginInputs,
    StyledTextFieldMedium,
    StyledTextFieldSmall
} from "../login/Login.styles";



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
        <LoginForm height={35}>

            <LoginHeader>
                Dodaj Pacjenta
            </LoginHeader>

            <LoginInputs>
                <StyledTextFieldMedium label="Imię" size={"medium"}  onChange={(event) => setFirstName(event.target.value)}/>
                <StyledTextFieldSmall label="Imię" size={"small"}  onChange={(event) => setFirstName(event.target.value)}/>

                <StyledTextFieldMedium label="Nazwisko" size={"medium"} onChange={(event) => setLastName(event.target.value)}/>
                <StyledTextFieldSmall label="Nazwisko" size={"small"} onChange={(event) => setLastName(event.target.value)}/>

                <StyledTextFieldMedium label="Email" type="email" size={"medium"} value = {email} onChange={event => setEmail(event.target.value)}/>
                <StyledTextFieldSmall label="Email" type="email" size={"small"} value = {email} onChange={event => setEmail(event.target.value)}/>

                <StyledTextFieldMedium label="Numer telefonu" type="tel" size={"medium"} onChange={event => setPhoneNumber(event.target.value)}/>
                <StyledTextFieldSmall  label="Numer telefonu" type="tel" size={"small"} onChange={event => setPhoneNumber(event.target.value)}/>

                <LoginButton  onClick={PatientRegistration}>
                    Dodaj
                </LoginButton>

            </LoginInputs>

        </LoginForm>


    );


}