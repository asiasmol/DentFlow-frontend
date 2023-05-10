import React, {useContext} from "react"
import dayjs from "dayjs";
import {DayBody, DayBodyHeader, DayLabel, DayTextLabel, Hour, HourHeader, Visit} from "./Week.styles";
import {CalendarContext} from "../../../context/CalendarContext";
import {VisitResponse} from "../../../models/api/VisitResponse";
import Tooltip from "@mui/material/Tooltip";



type Props = {
    day:dayjs.Dayjs,
    changeCalendar:() => void;
    column: number,
    isWeekCalendar:boolean;
};
export  const WeekDay: React.FC<Props> = (props:Props) =>{
    const {currentVisits,visitModifier} = useContext(CalendarContext);

    const getMatchingVisits = (hour:string) => {
        const day = props.day.format("YYYYMMDD");
        hour = (hour.length === 1 ? "0" + hour : hour)
        return currentVisits.filter((visit) => {
            return dayjs(visit.visitDate, 'YYYY-MM-DDHH').format("YYYYMMDDHH") === String(day)+String(hour);
        });
    }

    const setCurrentVisit = (visit:VisitResponse) => {
        visitModifier(visit);
        if(props.isWeekCalendar){
            props.changeCalendar()
        }
    };
    return(
        <>
            <DayBody column={props.column}>
                <DayBodyHeader  isToday={dayjs(new Date()).format("YYYYMMDD")  === props.day.format("YYYYMMDD")}>
                    <DayTextLabel className="margin marginBottom0" >{props.day.format("ddd")}.</DayTextLabel>
                    <DayLabel>{props.day.format("DD")}</DayLabel>
                </DayBodyHeader>

                {[...Array(12)].map((_, i) => (
                            <Hour key={i}  row={i+2} >
                                <HourHeader>{i+8}.00</HourHeader>
                                 {getMatchingVisits(i+8+"").map((visit) => (
                                    <Tooltip key={i}  title={
                                        <div>
                                            <strong>Opis wizyty:</strong> {visit.description}<br />
                                            <strong>Lekarz:</strong> {visit.doctor.firstName} {visit.doctor.lastName}<br />
                                            <strong>Pacjent:</strong> {visit.patient.firstName} {visit.patient.lastName}
                                        </div>
                                    }>
                                        <Visit  onClick={() => setCurrentVisit(visit)} min={Number(dayjs(visit.visitDate, 'YYYY-MM-DD HH:mm').format("mm"))}>
                                            {visit.doctor.firstName}
                                            {visit.doctor.lastName}
                                        </Visit>
                                    </Tooltip >
                                ))}
                            </Hour>
                ))}
            </DayBody>

    </>
    )
}
