import React from 'react';
import { EmployeeResponse } from '../../models/api/EmployeeResponse';
import { VisitResponse } from "../../models/api/VisitResponse";
import { Time } from "./ClinicAvailability.styles";
import dayjs from "dayjs";


interface TimeRangeProps {
    clinicId:string|undefined
    doctor: EmployeeResponse;
    visits: VisitResponse[];
}

export const TimeRange: React.FC<TimeRangeProps> = (props: TimeRangeProps) => {
    const {clinicId, doctor, visits } = props;

    const renderTimeList = (timeList: string[]) => {
        return timeList.map((time, index) => <Time onClick={bookAVisit} key={index}>{time}</Time>);
    };

    const bookAVisit = (event:React.MouseEvent<HTMLDivElement> ) => {
        console.log(event.currentTarget.innerHTML)
        console.log(doctor.email)
        console.log(clinicId)
        const hour = parseInt(dayjs(new Date()).format("HH"), 10)
        if(hour<8 || hour >19){

        }else{

        }
    };
    const getAvailableTimes = () => {
        const hoursOfAvailability = doctor.hoursOfAvailability;
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

    return <div>{renderTimeList(availableTimes)}</div>;
};
