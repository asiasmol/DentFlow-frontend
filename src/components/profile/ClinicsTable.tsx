import * as React from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalOverlay,
    TableDiv,
    UserName,
    ModalContentClinic,
    Table,
    AddButton,
    AutocompleteTime,
    TimeSettings,
    DeleteButton,
    CenterDiv,

} from "./Profile.styles";
import {useState, useEffect, useCallback} from "react";
import { ClinicResponse } from '../../models/api/ClinicResponse';
import {ClinicApi} from "../../api/ClinicApi";
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import {GridColDef,  GridRowParams} from '@mui/x-data-grid/models';
import {UserApi} from "../../api/UserApi";
import {toast} from "react-toastify";
import { HoursOfAvailabilityRequest } from '../../models/api/HoursOfAvailabilityRequest';
import {TextField} from "@mui/material";
import dayjs from "dayjs";


const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'Nr.',
        width: 90
    },
    {
        field: 'name',
        headerName: 'Kliniki :',
        width: 150,
        editable: true,
    }
];
interface Hour {
    from: string;
    to: string;
    [key: string]: string; // Indeksowanie typu Hour
}
interface Day {
    day: string;
    hours: Hour[];
}

export default function DataGridDemo() {
    const [clinics, setClinics] = useState<ClinicResponse[]>([]);
    const [clinicId, setClinicId] = useState();
    const [showModal, setShowModal] = useState(false);
    const [canSend, setcanSend] = useState(false);
    const [days, setDays] = useState<Day[]>([
        { day: 'Poniedziałek', hours: [] },
        { day: 'Wtorek', hours: [] },
        { day: 'Środa', hours: [] },
        { day: 'Czwartek', hours: [] },
        { day: 'Piątek', hours: [] },
        { day: 'Sobota', hours: [] },
    ]);
    const generateTimeOptions = () => {
        const options = [];
        for (let hour = 8; hour <= 20; hour++) {
            for (let minute = 0; minute < 60; minute += 15) {
                const time = dayjs().set("hour", hour).set("minute", minute);
                const label = time.format("HH:mm");
                const value = time.toISOString();
                options.push({ label, value });
            }
        }
        return options;
    };

    const timeOptions = generateTimeOptions();
    const addHour = (dayIndex: number) => {
        const updatedDays = [...days];
        updatedDays[dayIndex].hours.push({ from: '', to: '' });
        setDays(updatedDays);
        setcanSend(false)
    };
    const removeHour = (dayIndex: number, hourIndex: number) => {
        const updatedDays = [...days];
        updatedDays[dayIndex].hours.splice(hourIndex, 1);
        setDays(updatedDays);
        setcanSend(true)
    };
    const handleHourChange = (dayIndex: number, hourIndex: number, field: string, value: string) => {
        const updatedDays = [...days];
        updatedDays[dayIndex].hours[hourIndex][field] = value;
        setDays(updatedDays);
        days.forEach((day)=>{
            day.hours.forEach(async (hour)=>{
                setcanSend(hour.from!=="" && hour.to!=="" && hour.from<hour.to)
            })
        })
    };

    const closeModal = () => {
        setShowModal(false);
    };


    const handleSubmit = async () => {
        const updatedHoursOfAvailability: HoursOfAvailabilityRequest[] = [];
        try {
            days.forEach((day)=>{
                day.hours.forEach(async (hour)=>{
                    updatedHoursOfAvailability.push({
                        clinicId: clinicId,
                        day: day.day,
                        from: hour.from,
                        to: hour.to,
                    });
                })
            })
            await UserApi.updateUserHours(updatedHoursOfAvailability);

            closeModal();
        } catch (error) {
            toast.error("Nie udało się zaktualizować godzin");
        }
    };


    const fetchClinic = useCallback(async () => {
        try {
            const result = await ClinicApi.getClinicWhereWork()
            setClinics(result.data.sort((a, b) => a.id - b.id))
        }
        finally {

        }
    },[])
    const fetchHoursOfAvailability = useCallback(async (clinicId:number) => {
        try {
            const result = await UserApi.getHoursOfAvailability({
                clinicId:clinicId,
            })
            days.forEach((day)=>{
                day.hours=[]
                result.data.sort((a, b) => a.id - b.id).forEach((r)=>{
                    if(r.day===day.day){
                        day.hours.push({from:r.from,to:r.to})
                    }
                })
            })
            addHour(0)
            removeHour(0,days[0].hours.length-1)
        }
        finally {

        }
    },[])
    useEffect(() => {
        fetchClinic()
    },[fetchClinic]);


    const clinicSetting = (params: GridRowParams) => {
        fetchHoursOfAvailability(params.row.id)
        setClinicId(params.row.id)
        setShowModal(true)

    };
    return (
        <>
            <TableDiv>
                <DataGrid onRowClick={clinicSetting} sx={{
                    borderRadius: 3,
                    border: 3,
                    borderColor: '#1784B3',
                    '& .MuiDataGrid-cell:hover': {
                        color: 'primary.main',
                    },
                }}
                          rows={clinics}
                          columns={columns}
                          initialState={{
                              pagination: {
                                  paginationModel: {
                                      pageSize: 4,
                                  },
                              },
                          }}
                          pageSizeOptions={[4]}
                />
            </TableDiv>
            {showModal && (
                <Modal>
                    <ModalOverlay/>
                    <ModalContentClinic>
                        <UserName>Twoje Godziny Dostępności</UserName>
                        <ModalBody>
                            <Table>
                                <tr>
                                {days.map((day, dayIndex) => (
                                        <th>{day.day}</th>
                                ))}
                                </tr>
                                {days.map((day, dayIndex) => (
                                        <td>
                                            {day.hours.map((hour, hourIndex) => (
                                                <TimeSettings key={hourIndex}>
                                                    <AutocompleteTime
                                                        id="free-solo-demo"
                                                        freeSolo
                                                        options={timeOptions}
                                                        defaultValue={hour.from}
                                                        renderInput={(params) => <TextField {...params} label="OD" />}
                                                        onInputChange={(event, value) => {handleHourChange(dayIndex, hourIndex, 'from',value)}}
                                                        />

                                                    <AutocompleteTime
                                                        id="free-solo-demo"
                                                        freeSolo
                                                        options={timeOptions}
                                                        defaultValue={hour.to}
                                                        renderInput={(params) => <TextField {...params} label="DO" />}
                                                        onInputChange={(event, value) => {handleHourChange(dayIndex, hourIndex, 'to', value)}}
                                                    />
                                                    <DeleteButton onClick={() => removeHour(dayIndex, hourIndex)}>X</DeleteButton>
                                                </TimeSettings>
                                            ))}
                                            <CenterDiv>
                                                <AddButton onClick={() => addHour(dayIndex)}>Dodaj godzinę</AddButton>
                                            </CenterDiv>
                                        </td>

                                ))}
                            </Table>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={closeModal}>
                                Anuluj
                            </Button>
                            <Button onClick={handleSubmit} disabled={!canSend}>
                                Zapisz
                            </Button>
                        </ModalFooter>
                    </ModalContentClinic>
                </Modal>
            )}
        </>

);
}
