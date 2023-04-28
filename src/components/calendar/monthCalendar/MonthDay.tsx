import React, {useContext} from "react"
import dayjs from "dayjs";
import {DayBody, DayLabel} from "./Month.styles";
import {CalendarContext} from "../../../context/CalendarContext";


type Props = {
    day:dayjs.Dayjs,
    row: number,
    column:number
};
export  const MonthDay: React.FC<Props> = (props:Props) =>{
    const {dateModifier} = useContext(CalendarContext)
    const handleClick = (day:dayjs.Dayjs) =>{
        dateModifier(day)
    }

    return(
        <DayBody  onClick={() => handleClick(props.day)} isToday={dayjs(new Date()).format("YYYYMMDD") === props.day.format("YYYYMMDD")} column={props.column} row={props.row}>
            <DayLabel>{props.day.format("DD")}</DayLabel>
        </DayBody>
    )
}