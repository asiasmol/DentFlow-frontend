import React, {createContext, useCallback, useContext, useEffect, useState} from "react";
import {CalendarContextType} from "../models/context/CalendarContextType";
import {VisitResponse} from "../models/api/VisitResponse";
import {VisitApi} from "../api/VisitApi";
import {ClinicContext} from "./ClinicContext";
import {getWeek} from "../utils/utils";
import dayjs from "dayjs";
import {UserContext} from "./UserContext";


const defaultSettings: CalendarContextType = {
    selectedDate:dayjs(new Date()),
    currenDate: dayjs(new Date()),
    weekDays:getWeek(dayjs(new Date())),
    noFilterVisits:[],
    currentVisit: null,
    currentVisits: [],
    fetchVisits:()=>{},
    visitModifier: (visit: VisitResponse) => {},
    visitsModifier: (visits: VisitResponse[]) => {},
    dateModifier: (date:dayjs.Dayjs ) => {},
    selectedDateModifier: (date:dayjs.Dayjs) => {},
};

export const CalendarContext = createContext<CalendarContextType>(defaultSettings);

export const CalendarContextProvider = ({ children }: React.PropsWithChildren) => {
    const dayjs = require('dayjs');
    require('dayjs/locale/pl'); // Importuj lokalizację językową
    dayjs.locale('pl'); // Ustawienie języka na polski
    const [currenDate,setCurrenDate] = useState(dayjs(new Date()))
    const [selectedDate,setSelectedDate] = useState(dayjs(new Date()))
    const [weekDays,setWeekDays] = useState(getWeek(currenDate))
    const [currentVisit, setCurrentVisit] = useState<VisitResponse |null>(null);
    const [currentVisits, setCurrentVisits] = useState<VisitResponse[]  >([]);
    const [noFilterVisits,setNoFilterVisits] = useState<VisitResponse[]  >([]);
    const {currentClinic} = useContext(ClinicContext);
    const {currentUser} = useContext(UserContext);
    const visitModifier = (visit: VisitResponse ) => {
        setCurrentVisit(visit);
    };
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
            if (currentUser?.roles.includes("DOCTOR")){
                const result = await VisitApi.getDoctorVisitsFromClinic({clinicId: currentClinic?.id})
                setCurrentVisits(result.data);
                setNoFilterVisits(result.data)
            }
            else if (currentUser?.roles.includes("RECEPTIONIST")){
                const result = await VisitApi.getVisitsFromClinic({clinicId: currentClinic?.id})
                setCurrentVisits(result.data);
                setNoFilterVisits(result.data)
            }else if(currentUser?.roles.includes("USER")){
                const result = await VisitApi.getMyVisits()
                setCurrentVisits(result.data);
                setNoFilterVisits(result.data)
            }

        }catch (e) {

        }
        finally {
            // setIsLoading(false);
        }
    }, [currentClinic?.id]);

    useEffect(() => {
        fetchVisits();
    }, [fetchVisits])
    return (
        <CalendarContext.Provider value={{fetchVisits,currentVisit,visitModifier,selectedDate,selectedDateModifier,weekDays,currenDate,noFilterVisits, currentVisits,dateModifier, visitsModifier }}>
            {children}
        </CalendarContext.Provider>
    );
};


