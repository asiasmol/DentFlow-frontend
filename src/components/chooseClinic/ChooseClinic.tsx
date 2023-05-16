import React, {useCallback, useContext, useEffect, useState} from "react";
import {ChooseClinicLabel, ClinicButton, FormSelect, MainContainer} from "./ChooseClinic.styled";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {ClinicResponse} from "../../models/api/ClinicResponse";
import {ClinicApi} from "../../api/ClinicApi";
import {useNavigate} from "react-router-dom";
import {ClinicContext} from "../../context/ClinicContext";
import {CLINIC_ID, CLINIC_NAME} from "../../constants/constants";
import {UserApi} from "../../api/UserApi";
import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    UserName
} from "../profile/Profile.styles";
import {Visit} from "../calendar/dayCalendar/Visit";
import {UserContext} from "../../context/UserContext";


export const ChooseClinic = () => {
    const [clinics, setClinics] = React.useState<ClinicResponse[]>([]);
    const [clinicsToAdd, setClinicsToAdd] = React.useState<ClinicResponse[]>([]);
    const [isClinicValid, setIsClinicValid] = useState<boolean>(true);
    const [clinicId, setClinicId] = useState<string |number>("");
    const [open, setOpen] = React.useState(false);
    const {clinicModifier} = useContext(ClinicContext);
    const {currentUser} = useContext(UserContext)
    const navigate = useNavigate();

    const handleChange = (event: SelectChangeEvent<number>) => {
        setClinicId(event.target.value)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const closeModal = () => {
        setClinicsToAdd(clinicsToAdd.splice(1))
    };

    const fetchClinics= useCallback(async () => {
        try {
            const result = await ClinicApi.getClinicWhereWork();
            setClinics(result.data);
        } catch (e){

        }
    }, []);

    const fetchClinicsForUser= useCallback(async () => {
        try {
            const result = await ClinicApi.getAllClinics();
            setClinics(result.data);
        } catch (e){

        }
    }, []);
    const AddPatientsAccount= useCallback(async () => {
        try {
            await UserApi.addPatientsAccount({
                clinicId:clinicsToAdd[0].id
            });
            setClinicsToAdd(clinicsToAdd.splice(1))
        } catch (e){

        }
    }, [clinicsToAdd]);
    const fetchPatientsAccount= useCallback(async () => {
        try {
            const result = await UserApi.getAllMyPatientsAccountClinics();
            setClinicsToAdd(result.data)
        } catch (e){

        }
    }, []);

    useEffect(() => {
        if(currentUser?.roles.includes("DOCTOR") || currentUser?.roles.includes("RECEPTIONIST")){
            fetchClinics();
        }else{
            fetchClinicsForUser()
        }

        fetchPatientsAccount();
    }, [fetchClinics,fetchPatientsAccount])

    const choseClinic = useCallback(async () => {
        const foundClinic = clinics.find(clinic => clinic.id === clinicId);
        if (foundClinic) {
            clinicModifier(foundClinic);
            localStorage.setItem(CLINIC_ID,String(foundClinic.id))
            localStorage.setItem(CLINIC_NAME,foundClinic.name)

        }
        navigate(`/clinics/${clinicId}/visits`)
    },[navigate,clinicId,clinicModifier,clinics] );

    useEffect(() => {
        setIsClinicValid(clinicId !== "");
    }, [clinicId]);

    return (
        <>
            {clinics.length === 0 ? (
                <>
                </>
            ):(
                <>
                    {clinicsToAdd.length !== 0 && (
                        <Modal>
                            <ModalOverlay/>
                            <ModalContent>
                                <UserName>Wykryto Twoje konto w Klinice:<br/>{clinicsToAdd[0].name}</UserName>
                                <ModalBody>
                                    <Button onClick={AddPatientsAccount} >Dodaj</Button>
                                    <Button onClick={closeModal}>Anuluj</Button>
                                </ModalBody>
                                <ModalFooter>
                                    Jeśli nigdy nie byłeś w tej klinice :<br/>
                                    <button >Zgłoś Kradzież danych</button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    )}
                <MainContainer>
                    <ChooseClinicLabel>Wybierz placówkę </ChooseClinicLabel>
                    <FormSelect sx={{ m: 1, Width: 300 }}>
                        <InputLabel id="demo-controlled-open-select-label">Clinic</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            label="Clinic"
                            onChange={handleChange}
                        >
                            {clinics.map((clinic) => (
                                <MenuItem key={clinic.id}  value={clinic.id}>
                                    {clinic.city} {clinic.address} {clinic.name}
                                </MenuItem>
                            ))}
                        </Select>
                            <ClinicButton
                                disabled={!isClinicValid}
                                onClick={choseClinic}
                            >
                                Potwierdź
                            </ClinicButton>
                    </FormSelect>

                </MainContainer>
                </>
            )}
        </>
    );
};
