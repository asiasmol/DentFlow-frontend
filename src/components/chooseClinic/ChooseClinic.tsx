import React, {useCallback, useEffect, useState} from "react";
import {ChooseClinicLabel, ClinicButton, FormSelect, MainContainer} from "./ChooseClinic.styled";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {ClinicResponse} from "../../models/api/ClinicResponse";
import {ClinicApi} from "../../api/ClinicApi";


export const ChooseClinic = () => {
    const [clinicId, setClinicId] = React.useState<string | number>("");
    const [clinics, setClinics] = React.useState<ClinicResponse[]>([]);
    const [isClinicValid, setisClinicValid] = useState<boolean>(true);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event: SelectChangeEvent<typeof clinicId>) => {
        setClinicId(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const fetchClinic = useCallback(async () => {
        try {
            // setIsLoading(true);
            const result = await ClinicApi.getAll();
            setClinics(result.data);
        } finally {
            // setIsLoading(false);
        }
    }, []);
    useEffect(() => {
        fetchClinic();
    }, [fetchClinic]);

    const choseClinic = useCallback(async () => {
        console.log("działa")
    },[] );
    useEffect(() => {
        setisClinicValid(clinicId != "");
    }, [clinicId]);

    return (
        <>
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
                value={clinicId}
                label="Clinic"
                onChange={handleChange}
            >
                {clinics.map((clinic) => (
                    <MenuItem key={clinic.id}  value={clinic.name}>
                        {clinic.name}
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
);
};
