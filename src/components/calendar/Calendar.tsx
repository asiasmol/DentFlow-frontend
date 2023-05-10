import React, {useContext,useState} from 'react';
import { getWeek} from "../../utils/utils";
import {Slidebar} from "./slider/Slidebar";
import { Week } from './weekCalendar/Week';
import {Arrow, CalendarBody, CalendarHeaderBody, BackButton, HeaderLabel, HScreen, Toggle} from "./Calendar.styles";
import {CalendarContext} from "../../context/CalendarContext";
import { DayCalendar } from './dayCalendar/DayCalendar';
import {AddVisitModal} from "./addVisit/AddVisitModal";


export const Calendar = () => {
    const dayjs = require('dayjs');
    require('dayjs/locale/pl'); // Importuj lokalizację językową
    dayjs.locale('pl'); // Ustawienie języka na polski
    const {currenDate,weekDays,dateModifier} = useContext(CalendarContext)
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
                   <Arrow onClick={prevWeek}>
                       &lt;
                   </Arrow>
                   <Arrow onClick={nextWeek}>
                       &gt;
                   </Arrow>
                   <HeaderLabel>{getWeek(currenDate)[0].format("MMMM YYYY")}</HeaderLabel>
                   <HeaderLabel> Wizyty</HeaderLabel>
                   <BackButton onClick={handleModalOpen}>
                       Dodaj wizyte
                   </BackButton>
                   <BackButton onClick={goToday}>
                       Dzisiaj
                   </BackButton>
                   <BackButton onClick={changeCalendar}>
                       {isWeekCalendar ?(<>Dzień</>):(<>Tydzień</>)}
                   </BackButton>
               </CalendarHeaderBody>
               <CalendarBody >
                   {isOpen &&(
                       <Slidebar />
                   )}
                   {isWeekCalendar ?(<Week changeCalendar={changeCalendar} isWeekCalendar={isWeekCalendar} isOpen = {isOpen} week = {weekDays}/>):(<DayCalendar isOpen = {isOpen}/>)}
               </CalendarBody>
           </HScreen>
            {showModal && (
                <AddVisitModal  handleModalClose={handleModalClose}/>
            )}
    </>
    );
};

