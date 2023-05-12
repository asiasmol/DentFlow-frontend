import React, {useCallback, useContext, useState} from "react";
import {ClinicContext} from "../../context/ClinicContext";
import {PatientApi} from "../../api/PatientApi";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {
    LoginButton,
    LoginForm,
    LoginHeader,
    LoginInputs, StyledDatePickerMedium, StyledDatePickerSmall,
    StyledTextFieldMedium,
    StyledTextFieldSmall,
    ValidationError
} from "../login/Login.styles";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers";
import dayjs from "dayjs";



export const AddPatient = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [pesel, setPesel] = useState('')
    const [birthDate, setBirthDate] =  useState<dayjs.Dayjs | null>(null);
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
                pesel: pesel,
                birthDate: birthDate?.format("DD-MM-YYYY"),
                email: email,
                phoneNumber: phoneNumber
            })
            toast.success("Dodano Pacjenta");
            navigate("/clinic");
        } catch (error: any) {

        }
    },[currentClinic?.id, email, firstName, lastName, phoneNumber, navigate, birthDate, pesel])

    const handleBirthdayChange = (date: dayjs.Dayjs | any) => {
        setBirthDate(date)
    }
    return (
        <LoginForm height={54}>

            <LoginHeader>
                Dodaj Pacjenta
            </LoginHeader>

            <LoginInputs>
                <StyledTextFieldMedium label="Imię" size={"medium"}  onChange={(event) => setFirstName(event.target.value)}/>
                <StyledTextFieldSmall label="Imię" size={"small"}  onChange={(event) => setFirstName(event.target.value)}/>

                <StyledTextFieldMedium label="Nazwisko" size={"medium"} onChange={(event) => setLastName(event.target.value)}/>
                <StyledTextFieldSmall label="Nazwisko" size={"small"} onChange={(event) => setLastName(event.target.value)}/>

                <StyledTextFieldMedium label="PESEL" size={"medium"} onChange={(event) => setPesel(event.target.value)}/>
                <StyledTextFieldSmall label="PESEL" size={"small"} onChange={(event) => setPesel(event.target.value)}/>
                {pesel.length !== 9 && pesel.length !== 0 && <ValidationError>Błędny PESEL</ValidationError>}

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StyledDatePickerMedium label={"Data urodzenia"} slotProps={{textField:{size:"medium"}}} value={birthDate} format={"DD-MM-YYYY"} onChange={(date) => handleBirthdayChange(date)}/>
                    <StyledDatePickerSmall label={"Data urodzenia"} slotProps={{textField:{size:"small"}}} value={birthDate} format={"DD-MM-YYYY"} onChange={(date) => handleBirthdayChange(date)}/>
                </LocalizationProvider>

                <StyledTextFieldMedium label="Numer telefonu" type="tel" size={"medium"} onChange={event => setPhoneNumber(event.target.value)}/>
                <StyledTextFieldSmall  label="Numer telefonu" type="tel" size={"small"} onChange={event => setPhoneNumber(event.target.value)}/>

                <StyledTextFieldMedium label="Email" type="email" size={"medium"} value = {email} onChange={event => setEmail(event.target.value)}/>
                <StyledTextFieldSmall label="Email" type="email" size={"small"} value = {email} onChange={event => setEmail(event.target.value)}/>



                <LoginButton  onClick={PatientRegistration}>
                    Dodaj
                </LoginButton>

            </LoginInputs>

        </LoginForm>




    );


}