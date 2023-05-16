import React, { useContext, useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import {ClinicApi} from "../../api/ClinicApi";
import {EmployeeResponse} from "../../models/api/EmployeeResponse";
import { HeaderLabel, List } from "./ClinicAvailability.styles";

import {TimeRange} from './TimeRange';
import {CalendarContext} from "../../context/CalendarContext";
import {VisitResponse} from "../../models/api/VisitResponse";
import dayjs from "dayjs";


export const ClinicAvailability = () => {
    const { clinicId } = useParams();
    const [doctors, setDoctors] = useState<EmployeeResponse[]>([]);
    const [visits, setVisits] = useState<VisitResponse[]>([]);
    const {currenDate} = useContext(CalendarContext)

    const fetchDoctors = async () => {
        try {
            const parsedClinicId = clinicId ? parseInt(clinicId) : undefined;
            const result = await ClinicApi.getDoctorsForClinic({
                clinicId: parsedClinicId,
            });
            setDoctors(result.data.filter((doctor) =>
                doctor.hoursOfAvailability.some((availability) =>  availability.day.toLowerCase() === currenDate.format("dddd"))))
        } catch (error) {
            // Obsłuż błąd
        }
    };


    const fetchVisits = async () => {
        try {
            const parsedClinicId = clinicId ? parseInt(clinicId) : undefined;
            const result = await ClinicApi.getVisitsForClinic({
                clinicId: parsedClinicId,
            });
            setVisits( result.data.filter(value => dayjs(value.visitDate).format("YYYY MM dd")===currenDate.format("YYYY MM dd")))
        } catch (error) {
            // Obsłuż błąd
        }
    };


    useEffect(() => {
        fetchDoctors();
        fetchVisits()
    }, [currenDate]);
    return (
        <>
            <HeaderLabel>{currenDate.format("MMM DD dddd")}</HeaderLabel>
            <HeaderLabel>Możesz umówić się telefonicznie:<br /></HeaderLabel>
            <HeaderLabel>Lekarze:</HeaderLabel>
            <>
                {doctors.map((doctor,id) => (
                    <List key={id}>
                        {doctor.firstName} {doctor.lastName}
                        <>
                            <TimeRange clinicId={clinicId} doctor={doctor} visits={visits}/>
                        </>
                    </List>
                ))}
            </>
        </>
    );
};

