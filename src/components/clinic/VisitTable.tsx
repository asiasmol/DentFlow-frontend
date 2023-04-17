import {Table, Th, Td, HomeContainer} from "./VisitTable.styles";
import {Outlet} from "react-router-dom";
import React, {useContext, useEffect} from "react";
import {ClinicContext} from "../../context/ClinicContext";


export const VisitTable = () => {
    const {currentClinic } = useContext(ClinicContext);
    const visits = [
        {
            date: '2023-04-15',
            time: '14:30',
            patient: 'Jan Kowalski',
            doctor: 'Anna Nowak',
            description: 'Badanie kontrolne',
        },
        {
            date: '2023-04-16',
            time: '10:00',
            patient: 'Anna Nowak',
            doctor: 'Jan Kowalski',
            description: 'Badanie ogólne',
        },
        {
            date: '2023-04-18',
            time: '16:00',
            patient: 'Marta Wiśniewska',
            doctor: 'Anna Nowak',
            description: 'Konsultacja dermatologiczna',
        },
    ];
    useEffect(() => {
    }, [currentClinic]);

    return (
        <>
            <HomeContainer>
                <Table >
                    <thead>
                    <tr>
                        <Th>Data wizyty</Th>
                        <Th>Godzina wizyty</Th>
                        <Th>Pacjent</Th>
                        <Th>Lekarz</Th>
                        <Th>Opis</Th>
                    </tr>
                    </thead>
                    <tbody>
                    {visits.map((visit, index) => (
                        <tr key={index}>
                            <Td>{visit.date}</Td>
                            <Td>{visit.time}</Td>
                            <Td>{visit.patient}</Td>
                            <Td>{visit.doctor}</Td>
                            <Td>{visit.description}</Td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </HomeContainer>
            <Outlet/>
        </>
    );
};
