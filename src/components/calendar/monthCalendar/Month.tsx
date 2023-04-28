import dayjs from "dayjs";
import React from "react"
import { MonthDay } from "./MonthDay";
import {DayLabel, MonthBody, MonthHeader} from "./Month.styles";


type Props = {
    month: dayjs.Dayjs[][];
};

export const Month: React.FC<Props> = (props:Props) => {
    const dayjs = require('dayjs');
    require('dayjs/locale/pl'); // Importuj lokalizację językową
    dayjs.locale('pl');
    return (
        <>
            <MonthBody>
               {["P","W","Ś","C","P","S","N"].map((day,index) => (
                    <MonthHeader row={0} column={0} >
                        <DayLabel>
                            {day}
                        </DayLabel>
                    </MonthHeader>
                ))}
                {props.month.map((row, i) => (
                    <React.Fragment key={i}>
                        {row.map((day, idx) => (
                                <MonthDay key={idx} row={i+2} column={idx+1} day={day} />
                        ))}
                    </React.Fragment>
                ))}
            </MonthBody>
        </>
    );
};