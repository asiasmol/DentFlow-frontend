import React, { useContext, useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import {ClinicApi} from "../../api/ClinicApi";
import {EmployeeResponse} from "../../models/api/EmployeeResponse";
import {Div, HeaderLabel, List} from "./ClinicAvailability.styles";

import {TimeRange} from './TimeRange';
import {CalendarContext} from "../../context/CalendarContext";
import {VisitResponse} from "../../models/api/VisitResponse";
import dayjs from "dayjs";
import {ClinicContext} from "../../context/ClinicContext";



type Props = {
    isOpen:boolean
};

export const ClinicAvailability: React.FC<Props> = (props:Props) => {
    const { clinicId } = useParams();
    const [doctors, setDoctors] = useState<EmployeeResponse[]>([]);
    const [visits, setVisits] = useState<VisitResponse[]>([]);
    const {currenDate} = useContext(CalendarContext)
    const {currentClinic} = useContext(ClinicContext)
    const fetchDoctors = async () => {
        try {
            const parsedClinicId = clinicId ? parseInt(clinicId) : undefined;
            const result = await ClinicApi.getDoctorsForClinic({
                clinicId: parsedClinicId,
            });
            setDoctors(result.data.sort((a,b) => a.firstName.length-b.firstName.length))
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
        <Div isOpen={props.isOpen} >
            <div>
                <HeaderLabel>{currenDate.format("MMM DD dddd")}</HeaderLabel>
                <HeaderLabel>Możesz umówić się telefonicznie:<br />{currentClinic?.phoneNumber}</HeaderLabel>
                <>
                    {doctors.map((doctor,id) => (
                        <>
                            <HeaderLabel>{doctor.firstName} {doctor.lastName}</HeaderLabel>
                            <List key={id}>
                                <TimeRange clinicId={clinicId} doctor={doctor} visits={visits}/>
                            </List>
                        </>
                    ))}
                </>
            </div>
        </Div>
    );
};

