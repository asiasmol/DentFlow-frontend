import React, {useContext} from "react"
import { DayBody } from "./DayCalendar.styles";
import {WeekDay} from "../weekCalendar/WeekDay";
import {Visit} from "./Visit";
import {CalendarContext} from "../../../context/CalendarContext";




type Props = {
    isOpen:boolean
};

export  const DayCalendar: React.FC<Props> = (props:Props) =>{
    const {selectedDate} = useContext(CalendarContext)

    return(
        <DayBody isOpen={props.isOpen}>
            <WeekDay  key={0} column={1}  day={selectedDate}    changeCalendar={()=>{}} isWeekCalendar={false}/>
           < Visit/>
        </DayBody>
    )
}