import React, {useContext} from "react"
import dayjs from "dayjs";
import { DayBody } from "./Day.styles";
import {WeekDay} from "../weekCalendar/WeekDay";
import {Visit} from "./Visit";
import {CalendarContext} from "../../../context/CalendarContext";




type Props = {
    isOpen:boolean
};

export  const DayCalendar: React.FC<Props> = (props:Props) =>{
    const {currenDate} = useContext(CalendarContext)

    return(
        <DayBody isOpen={props.isOpen}>
            <WeekDay key={0} column={1}  day={currenDate}   />
           < Visit/>
        </DayBody>
    )
}