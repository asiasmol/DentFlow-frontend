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
    const {selectedDate,selectedDateModifier,dateModifier} = useContext(CalendarContext)
    const handleClick = (day:dayjs.Dayjs) =>{
        dateModifier(day)
        selectedDateModifier(day)
    }

    return(
        <DayBody  onClick={() => handleClick(props.day)}
                  isToday={dayjs(new Date()).format("YYYYMMDD") === props.day.format("YYYYMMDD")}
                  column={props.column}
                  row={props.row}
                  isSelected={selectedDate.format("YYYYMMDD") === props.day.format("YYYYMMDD")}>
            <DayLabel>{props.day.format("DD")}</DayLabel>
        </DayBody>
    )
}