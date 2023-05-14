import * as React from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalContent, ModalFooter,
    ModalOverlay,
    Monday,
    Tuesday,
    TableDiv,
    UserName,
    Week,
    Friday,
    Thursday,
    Saturday,
    Wednesday,
    ModalContentClinic,
    WeekName
} from "./Profile.style";
import {useState, useEffect, useCallback} from "react";
import { ClinicResponse } from '../../models/api/ClinicResponse';
import {ClinicApi} from "../../api/ClinicApi";
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import {GridColDef,  GridRowParams} from '@mui/x-data-grid/models';
import {UserApi} from "../../api/UserApi";
import {toast} from "react-toastify";
import { HoursOfAvailabilityRequest } from '../../models/api/HoursOfAvailabilityRequest';


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
                            <table>
                                <thead>
                                <tr>
                                    <th>Dzień</th>
                                    <th>Godziny dostępności</th>
                                </tr>
                                </thead>
                                <tbody>
                                {days.map((day, dayIndex) => (
                                    <tr key={day.day}>
                                        <td>{day.day}</td>
                                        <td>
                                            {day.hours.map((hour, hourIndex) => (
                                                <div key={hourIndex}>
                                                    <input
                                                        type="time"
                                                        value={hour.from}
                                                        onChange={(e) => handleHourChange(dayIndex, hourIndex, 'from', e.target.value)}
                                                    />
                                                    do
                                                    <input
                                                        type="time"
                                                        value={hour.to}
                                                        onChange={(e) => handleHourChange(dayIndex, hourIndex, 'to', e.target.value)}
                                                    />
                                                    <button onClick={() => removeHour(dayIndex, hourIndex)}>Usuń</button>
                                                </div>
                                            ))}
                                            <button onClick={() => addHour(dayIndex)}>Dodaj godzinę</button>
                                        </td>
                                        <td></td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
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
