import React from "react"
import dayjs from "dayjs";
import { WeekDay } from "./WeekDay";
import { WeekBody } from "./Week.styles";




type Props = {
    week: dayjs.Dayjs[];
    isOpen:boolean;
    changeCalendar:() => void;
    isWeekCalendar:boolean;
};

export  const Week: React.FC<Props> = (props:Props) =>{

    return(
        <WeekBody isOpen={props.isOpen}>
            {props.week.map((day, id) => (
                <>
                    <WeekDay key={id} column={id+1} isWeekCalendar={props.isWeekCalendar} changeCalendar={props.changeCalendar} day={day} />
                </>
            ))}
        </WeekBody>
    )
}