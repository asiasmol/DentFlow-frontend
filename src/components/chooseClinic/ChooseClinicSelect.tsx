import React, {useCallback, useEffect, useState} from "react";
import {ChooseClinicLabel, ClinicButton, FormSelect, MainContainer} from "./ChooseClinicSelect.styled";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {ClinicResponse} from "../../models/api/ClinicResponse";
import {ClinicApi} from "../../api/ClinicApi";

export const ChooseClinicSelect = () => {
    const [clinicId, setClinicId] = React.useState<string | number>("");
    const [clinicsWhereWork, setclinicsWhereWork] = React.useState<ClinicResponse[]>([]);
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
    const fetchClinics= useCallback(async () => {
        try {
            const result = await ClinicApi.getClinicWhereWork();
            setclinicsWhereWork(result.data);
        } finally {
            // setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchClinics();
    }, [fetchClinics])

    const choseClinic = useCallback(async () => {
        console.log("działa")
    },[] );

    useEffect(() => {
        setisClinicValid(clinicId !== "");
    }, [clinicId]);

    return (
        <>
            {clinicsWhereWork.length === 0 ? (
                <MainContainer>
                    <ChooseClinicLabel>Niestety nikt cię nie zatrudnił </ChooseClinicLabel>
                    <a href="/clinic-registration">
                        <ClinicButton
                            onClick={choseClinic}
                        >
                            Załóż Klinike
                        </ClinicButton>
                    </a>
                </MainContainer>

            ):(
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
                            {clinicsWhereWork.map((clinic) => (
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
            )}
        </>
    );
};
