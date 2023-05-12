import React, {useContext} from "react"
import { DayBody} from "./DayCalendar.styles";
import {WeekDay} from "../weekCalendar/WeekDay";
import {Visit} from "./Visit";
import {CalendarContext} from "../../../context/CalendarContext";
import {UserContext} from "../../../context/UserContext";
import { RecepcionistVisitInformation } from "./RecepcionistVisitInformation";




type Props = {
    isOpen:boolean
};

export  const DayCalendar: React.FC<Props> = (props:Props) =>{
    const {selectedDate} = useContext(CalendarContext)
    const {currentUser} = useContext(UserContext)

    return(
        <DayBody isOpen={props.isOpen} >
            <WeekDay  key={"dayCalendar_WeekDay"}column={1}  day={selectedDate}    changeCalendar={()=>{}} isWeekCalendar={false} isDoctor={!currentUser?.roles.includes("DOCTOR")}/>
            {currentUser?.roles.includes("DOCTOR") &&< Visit/>}
            {currentUser?.roles.includes("RECEPTIONIST") &&<RecepcionistVisitInformation/>}
        </DayBody>
    )
}