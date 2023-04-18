import React, { useState } from "react";
import { format, startOfWeek, addDays } from "date-fns";
import {
    CalendarContainer,
    CalendarHeader,
    Day,
    Days,
    Hour,
    Hours,
    Weekday,
    Weekdays,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Time,
} from "./Calendar.styles";
import AddVisit from "./addVisit/AddVisit";

export const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [currentDate, setCurrentDate] = useState(new Date());
    const [showModal, setShowModal] = useState(false);

    const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 }); // Start tygodnia, ustawiony na poniedziałek
    const weekDays = [...Array(7)].map((_, i) => addDays(weekStart, i)); // Tablica dni tygodnia

    const prevWeek = () => {
        setCurrentDate((prevDate) => addDays(prevDate, -7)); // Przesunięcie daty o 7 dni wstecz
    };

    const nextWeek = () => {
        setCurrentDate((prevDate) => addDays(prevDate, 7)); // Przesunięcie daty o 7 dni do przodu
    };

    const handleHourClick = (hour:string,day:string) => {
        const date = new Date(day);
        const formattedDate = date.toLocaleDateString('pl-PL');
        setSelectedTime(hour);
        setSelectedDate(formattedDate);
        setShowModal(true);
    };

    // Obsługa kliknięcia na przycisk zamknięcia modala
    const handleModalClose = () => {
        setSelectedDate("");
        setSelectedTime("");
        setShowModal(false);
    };

    return (
        <CalendarContainer>
            <CalendarHeader>
                <button onClick={prevWeek}>Poprzedni tydzień</button>
                <div>
                    <h3>Wizyty</h3>
                    <h2>
                        {format(weekStart, "dd MMMM yyyy")} -{" "}
                        {format(addDays(weekStart, 6), "dd MMMM yyyy")}
                    </h2>
                </div>
                <button onClick={nextWeek}>Następny tydzień</button>
            </CalendarHeader>
            <Weekdays>
                {weekDays.map((day) => (
                    <Weekday key={day.toString()}>{format(day, "EEE")}</Weekday>
                ))}
            </Weekdays>
            <Days>
                <Hours>
                    {[...Array(13)].map((_, i) => (
                        <Time key={i+8}>{`${i+8}:00`}</Time>
                    ))}
                </Hours>
                {Array.from({ length: 7 }, (_, i) => addDays(weekStart, i)).map(
                    (day) => (
                        <Day key={day.toString()}>
                            <Hours>
                                {[...Array(13)].map((_, i) => (
                                    <Hour key={i+8} onClick={() => handleHourClick(`${i+8}:00`,day.toString())}>

                                    </Hour>
                                ))}
                            </Hours>
                        </Day>
                    )
                )}
            </Days>
            {showModal && (
                <Modal>
                    <ModalOverlay onClick={handleModalClose} />
                    <ModalContent>
                        <ModalHeader>Umów wizytę</ModalHeader>
                        <ModalBody>
                            <AddVisit date= {selectedDate} time={selectedTime}/>
                        </ModalBody>
                        <ModalFooter>
                            <Button  onClick={handleModalClose}>
                                Anuluj
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            )}
        </CalendarContainer>
    );
};
