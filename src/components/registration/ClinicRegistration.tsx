import React, {useCallback, useContext, useEffect, useState} from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import './Registration.style';
import {StyledBox, WelcomeText, WindowRegistration, Fields} from "./Registration.style";
import {AuthApi} from "../../api/AuthApi";
import {ClinicApi} from "../../api/ClinicApi";
import {UserContext} from "../../context/UserContext";

const ClinicRegistration = () =>{
    const [name, setName] = useState('');
    const [isnameValid, setIsnameValid] = useState<boolean>(true);
    const { currentUser,userModifier} = useContext(UserContext);

    const registerClinic = useCallback(async () => {
        try {
            await ClinicApi.register({
                name: name,
            });
            currentUser?.roles.push("OWNER")
            userModifier(currentUser);
        } catch (error: any) {

        }
    }, [name]);
    useEffect(() => {
        setIsnameValid(name.length > 0);
    }, [name]);
    return(
        <WindowRegistration>
            <StyledBox>
                <WelcomeText>Załóż przychodnię</WelcomeText>
                <Fields>
                    <TextField
                        required
                        id="clinicName"
                        label="Nazwa przychodni"
                        variant='standard'
                        type='text'
                        onChange={event => setName(event.target.value)}
                        />
                    {/*<TextField*/}
                    {/*    required*/}
                    {/*    id='Addres'*/}
                    {/*    label="Adres"*/}
                    {/*    type='text'*/}
                    {/*    variant='standard'*/}
                    {/*    onChange={event => setAddres(event.target.value)}*/}
                    {/*    />*/}
                    {/*<TextField*/}
                    {/*    id='clinicTelNumber'*/}
                    {/*    label="Numer telefonu"*/}
                    {/*    type='tel'*/}
                    {/*    variant='standard'*/}
                    {/*    onChange={event => setTelNumber(event.target.value)}*/}
                    {/*/>*/}
                </Fields>
                <Button
                    disabled={!isnameValid }
                    onClick={registerClinic}
                >Załóż</Button>
            </StyledBox>
        </WindowRegistration>
    )

}
export default ClinicRegistration;