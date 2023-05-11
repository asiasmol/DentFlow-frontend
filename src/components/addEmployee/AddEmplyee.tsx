import React, {useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ClinicApi} from "../../api/ClinicApi";
import {toast} from "react-toastify";
import {UserApi} from "../../api/UserApi";
import {LoginButton, LoginForm, LoginHeader, LoginInputs, ValidationError} from "../login/Login.styles";
import {FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import {AutocompleteEmail} from "./AddEmplyee.styles";

export const AddEmplyee = ()=>{
    const [email, setEmail] = useState<string>("");
    const [role, setRole] = useState<string>("");
    const [isRole, setIsRole] = useState<boolean>(false);
    const [emailList, setEmailList] = useState<string[]>([]);
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRole((event.target as HTMLInputElement).value);
        setIsRole(true);
    };

    const addEmployee = useCallback(async () => {
        await ClinicApi.addEmployees({
            email: email,
            role:role
        });
        toast.success("Dodano pracownika");
        navigate("/my-clinic");
    },[email, role, navigate] );

    const fetchEmails= useCallback(async () => {
            const result = await UserApi.getAllEmails();
            setEmailList(result.data);
    }, []);


    useEffect(() => {
        fetchEmails();
    }, [fetchEmails])

    return (
        <LoginForm height={30}>
            <LoginHeader>
                Dodaj Pracownika
            </LoginHeader>
            <LoginInputs>
                <AutocompleteEmail
                    disablePortal
                    id="combo-box-demo"
                    options={emailList}
                    renderInput={(params) => <TextField {...params} label="Email" />}
                    inputValue={email}
                    onInputChange={(event, email) => {setEmail(email);}}
                />
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Rola</FormLabel>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel value="DOCTOR" control={<Radio onChange={handleChange}/>} label="Lekarz" />
                        <FormControlLabel value="RECEPTIONIST" control={<Radio onChange={handleChange}/>} label="Recepcjonista" />
                    </RadioGroup>
                </FormControl>
                <LoginButton onClick={addEmployee} disabled={!isRole}>
                    Dodaj
                </LoginButton>
            </LoginInputs>
        </LoginForm>
    );
}