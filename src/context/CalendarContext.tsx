import React, {createContext, useCallback, useContext, useEffect, useState} from "react";
import {CalendarContextType} from "../models/context/CalendarContextType";
import {VisitResponse} from "../models/api/VisitResponse";
import {VisitApi} from "../api/VisitApi";
import {ClinicContext} from "./ClinicContext";
import dayjs from "dayjs";
import {getWeek} from "../utils/utils";




const defaultSettings: CalendarContextType = {
    selectedDate:dayjs(new Date()),
    currenDate: dayjs(new Date()),
    weekDays:getWeek(dayjs(new Date())),
    noFilterVisits:[],
    currentVisits: [],
    visitsModifier: (visits: VisitResponse[]) => {},
    dateModifier: (date:dayjs.Dayjs ) => {},
    selectedDateModifier: (date:dayjs.Dayjs) => {},
};

export const CalendarContext = createContext<CalendarContextType>(defaultSettings);

export const CalendarContextProvider = ({ children }: React.PropsWithChildren) => {
    const [currenDate,setCurrenDate] = useState(dayjs(new Date()))
    const [selectedDate,setSelectedDate] = useState(dayjs(new Date()))
    const [weekDays,setWeekDays] = useState(getWeek(currenDate))
    const [currentVisits, setCurrentVisits] = useState<VisitResponse[] >([]);
    const [noFilterVisits,setNoFilterVisits] = useState<VisitResponse[] >([]);
    const {currentClinic} = useContext(ClinicContext);
    const visitsModifier = (visits: VisitResponse[] ) => {
        setCurrentVisits(visits);
    };
    const selectedDateModifier = (date:dayjs.Dayjs ) => {
        setSelectedDate(date);
    };
    const dateModifier = (date:dayjs.Dayjs ) => {
        setCurrenDate(date);
        setWeekDays(getWeek(date))
    };
    const fetchVisits= useCallback(async () => {
        try {
            const result = await VisitApi.getVisitsFromClinic({clinicId: currentClinic?.id})
            setCurrentVisits(result.data);
            setNoFilterVisits(result.data)
        } finally {
            // setIsLoading(false);
        }
    }, [currentClinic?.id]);

    useEffect(() => {
        fetchVisits();
    }, [fetchVisits])
    return (
        <CalendarContext.Provider value={{selectedDate,selectedDateModifier,weekDays,currenDate,noFilterVisits, currentVisits,dateModifier, visitsModifier }}>
            {children}
        </CalendarContext.Provider>
    );
};


