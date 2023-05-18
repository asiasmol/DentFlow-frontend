import React, {useContext,useState} from 'react';
import { getWeek} from "../../utils/utils";
import {Slidebar} from "./slider/Slidebar";
import { Week } from './weekCalendar/Week';
import {Arrow, CalendarBody, CalendarHeaderBody, BackButton,BackVisitButton, HeaderLabel, HScreen, Toggle} from "./Calendar.styles";
import {CalendarContext} from "../../context/CalendarContext";
import { DayCalendar } from './dayCalendar/DayCalendar';
import {AddVisitModal} from "./addVisit/AddVisitModal";
import {UserContext} from "../../context/UserContext";
import {ClinicAvailability} from "../UserInterface/ClinicAvailability";
import {useParams} from "react-router-dom";
import dayjs from "dayjs";


export const Calendar = () => {
    const { clinicId } = useParams();
    const dayjs = require('dayjs');
    require('dayjs/locale/pl'); // Importuj lokalizację językową
    dayjs.locale('pl'); // Ustawienie języka na polski
    const {currenDate,selectedDateModifier,weekDays,dateModifier} = useContext(CalendarContext)
    const {currentUser} = useContext(UserContext)
    const [isOpen, setIsOpen] = useState(false);
    const [isWeekCalendar, setIsWeekCalendar] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const handleModalOpen = () => {
        setShowModal(true);
    };
    const handleModalClose = () => {
        setShowModal(false);
    };
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    function changeCalendar(){
        setIsWeekCalendar(!isWeekCalendar);
    }
    const goToday =() => {
        dateModifier(dayjs(new Date()));
        selectedDateModifier(dayjs(new Date()))
    }
    const nextWeek =() => {
        dateModifier(currenDate.add(1, 'week'));
    }
    const prevWeek =() => {
        dateModifier(currenDate.subtract(1, 'week'));
    }
    return (
        <>
           <HScreen>
               <Toggle onClick={toggle}>
                   <span />
                   <span />
                   <span />
               </Toggle>
               <CalendarHeaderBody>
                   {(currentUser?.roles.includes("DOCTOR") ||
                       currentUser?.roles.includes("RECEPTIONIST")) &&
                       <BackVisitButton onClick={handleModalOpen}>Dodaj wizyte</BackVisitButton>}
                   <BackButton onClick={goToday}>
                       Dzisiaj
                   </BackButton>
                   <BackButton onClick={changeCalendar}>
                       {isWeekCalendar ?(<>Dzień</>):(<>Tydzień</>)}
                   </BackButton>
                   <HeaderLabel>{getWeek(currenDate)[0].format("MMMM YYYY")}</HeaderLabel>
                   <Arrow onClick={prevWeek}>
                       &lt;
                   </Arrow>
                   <Arrow onClick={nextWeek}>
                       &gt;
                   </Arrow>


               </CalendarHeaderBody>
               <CalendarBody >
                   {isOpen &&(
                       <Slidebar />
                   )}
                   {(currentUser?.roles.includes("DOCTOR") || currentUser?.roles.includes("RECEPTIONIST") || !clinicId )?
                       (<>{isWeekCalendar ?(<Week changeCalendar={changeCalendar} isWeekCalendar={isWeekCalendar} isOpen = {isOpen} week = {weekDays}/>)
                           :(<DayCalendar isOpen = {isOpen}/>)
                       }</>):(<ClinicAvailability isOpen = {isOpen}/>)}
               </CalendarBody>
           </HScreen>
            {showModal && (
                <AddVisitModal  handleModalClose={handleModalClose}/>
            )}
    </>
    );
};

