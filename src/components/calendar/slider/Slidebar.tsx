import React, { useEffect, useState} from "react"
import {Arrow, HeaderLabel, SlidebarBody, SlidebarHeader} from "./Slidebar.styles";
import {getMonth,} from "../../../utils/utils";
import dayjs from "dayjs";
import {Month} from "../monthCalendar/Month";
import {Filter} from "./Filter";



export function Slidebar(){
    const [currenMonth,setCurrenMonth] = useState(dayjs().month())
    const [monthDays,setMonthDays] = useState(getMonth(currenMonth))
    const nextWeek =() => {
        setCurrenMonth(currenMonth+1);
        setMonthDays(getMonth(currenMonth+1));
    }
    const prevWeek =() => {
        setCurrenMonth(currenMonth-1);
        setMonthDays(getMonth(currenMonth-1));
    }
    return(
        <SlidebarBody>
            <SlidebarHeader>
                <HeaderLabel>{dayjs(new Date(dayjs().year(),currenMonth)).format("MMMM YYYY")}</HeaderLabel>
                <SlidebarHeader>
                    <Arrow onClick={prevWeek}>
                        &lt;
                    </Arrow>
                    <Arrow onClick={nextWeek}>
                        &gt;
                    </Arrow>
                </SlidebarHeader>
            </SlidebarHeader>
            <Month month = {monthDays} />
            <Filter/>
        </SlidebarBody>
    )
}