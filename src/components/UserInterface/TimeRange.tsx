import React, {useCallback, useContext, useState} from 'react';
import { EmployeeResponse } from '../../models/api/EmployeeResponse';
import { VisitResponse } from "../../models/api/VisitResponse";
import { Time } from "./ClinicAvailability.styles";
import dayjs from "dayjs";
import {
    Button,
    CenterDiv,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    UserName
} from "../profile/Profile.styles";
import {LoginButton, LoginHeader, LoginInputs} from "../login/Login.styles";
import {Autocomplete, TextField} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {StyledTextarea} from "../calendar/addVisit/AddVisitModal..styles";
import {VisitApi} from "../../api/VisitApi";
import {toast} from "react-toastify";
import {CalendarContext} from "../../context/CalendarContext";
import {HoursOfAvailabilityResponse} from "../../models/api/HoursOfAvailabilityResponse";


interface TimeRangeProps {
    clinicId:string|undefined
    doctor: EmployeeResponse;
    visits: VisitResponse[];
}

export const TimeRange: React.FC<TimeRangeProps> = (props: TimeRangeProps) => {
    const {clinicId, doctor, visits } = props;
    const [showModal, setShowModal] = React.useState(false);
    const [type, setType] = useState("Konsultacja");
    const [description, setDescription] = useState("")
    const [from, setfrom] = useState("")
    const {currenDate} = useContext(CalendarContext)

    const renderTimeList = (timeList: string[]) => {
        return timeList.map((time, index) => <Time onClick={bookAVisit} key={index}>{time}</Time>);
    };

    const handleModalClose = () => {
        setShowModal(false)
    };
    function changeDescription(event:React.ChangeEvent<HTMLTextAreaElement>){
        setDescription(event.target.value)
    }
    const bookAVisit = (event:React.MouseEvent<HTMLDivElement> ) => {
        setShowModal(true)
        setfrom(event.currentTarget.innerHTML)
    };
    const handleAppointment = useCallback(async () => {
        try {
            await VisitApi.addVisitUser({
                clinicId:parseInt(clinicId??""),
                receptionistDescription: description,
                visitDate:currenDate?.format("YYYY-MM-DD"),
                visitTime:from,
                type:type === "Kontrolna" ? "CONTROL" : type === "Zabieg" ? "TREATMENT" : type === "Inne" ? "OTHER" : "",
                doctorEmail:doctor.email,
                lengthOfTheVisit: 30
            })
            toast.success("Dodano wizyte");
            setShowModal(true)
        } finally {
            // setIsLoading(false);
        }
    }, [doctor.email,currenDate,clinicId,type,props,description]);
    const getAvailableTimes = () => {
        const hoursOfAvailability:HoursOfAvailabilityResponse[] = []
        doctor.hoursOfAvailability.map((hour)=>{
            if(hour.day.toLowerCase() === currenDate.format("dddd")){
                console.log(hour)
                hoursOfAvailability.push(hour)
            }
        })
        const occupiedHoursMap: { [hour: string]: boolean } = {};
        for (const visit of visits) {
            // Sprawdzanie czy email lekarza zgadza się z wizytą
            if (visit.doctor.email === doctor.email) {
                const visitStartTime = new Date(visit.visitDate);
                const visitEndTime = new Date(visit.visitDate);
                visitEndTime.setMinutes(visitEndTime.getMinutes() + visit.lengthOfTheVisit);

                let currentTime = visitStartTime;
                while (currentTime < visitEndTime) {
                    const hour = formatTime(currentTime);
                    occupiedHoursMap[hour] = true;
                    currentTime.setMinutes(currentTime.getMinutes() + 30);
                }
            }
        }

        const availableTimes: string[] = [];
        for (const availability of hoursOfAvailability) {
            const startTime = new Date(`2000-01-01 ${availability.from}`);
            const endTime = new Date(`2000-01-01 ${availability.to}`);

            let currentTime = startTime;
            while (currentTime < endTime) {
                const hour = formatTime(currentTime);
                if (!occupiedHoursMap[hour]) {
                    availableTimes.push(hour);
                }

                currentTime.setMinutes(currentTime.getMinutes() + 30);
            }
        }

        // Sortowanie godzin
        availableTimes.sort();

        return availableTimes;
    };

    // Funkcja pomocnicza do formatowania czasu w formacie HH:MM
    const formatTime = (time: Date): string => {
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    const availableTimes = getAvailableTimes();

    return (
        <>
            {showModal ?(
                <Modal>
                    <ModalOverlay onClick={handleModalClose} />
                    <ModalContent>
                        <LoginHeader>Umów wizytę</LoginHeader>
                        <LoginInputs>
                            <Autocomplete
                                sx = {{marginBottom: "1.5rem",
                                }}
                                disablePortal
                                id="combo-box-demo"
                                defaultValue={"Kontrolna"}
                                options={["Kontrolna","Zabieg","Inne"]}
                                renderInput={(params) => <TextField {...params} label="Rodzaj Wizyty" />}
                                inputValue={type}
                                onInputChange={(event, type) => {setType(type);}}
                            />

                            <StyledTextarea
                                value={description}
                                onChange={changeDescription}
                                aria-label="minimum height"
                                minRows={3}
                                placeholder="Opisz co ci dolega"
                            />
                            <LoginButton onClick={handleAppointment} >Umów</LoginButton>
                        </LoginInputs>
                    </ModalContent>
                </Modal>
            ):(
                <div>
                {renderTimeList(availableTimes)}
                 </div>)}
        </>)
};
