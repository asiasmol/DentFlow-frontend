import React, {ChangeEventHandler, useContext, useEffect, useState} from "react"
import { FilterBody } from "./Slidebar.styles"
import {CalendarContext} from "../../../context/CalendarContext";
import {Doctor} from "../../../models/Doctor";


export function Filter(){
    const {noFilterVisits,visitsModifier} = useContext(CalendarContext);
    const [doctors,setDoctors] = useState<Doctor[]>([]);
    const [doctorsToFilter,setDoctorsToFilter] = useState<string[]>([]);

    const handleCheckChange: ChangeEventHandler<HTMLInputElement> = (event) =>  {
        const email = event.target.value;
        setDoctorsToFilter((prevSelected) => {
            if (event.target.checked) {
                return [...prevSelected, email];
            } else {
                return prevSelected.filter((selectedEmail) => selectedEmail !== email);
            }
        });

    }
    useEffect(()=>{
        visitsModifier(noFilterVisits.filter(item => doctorsToFilter.some(e => item.doctor.email.includes(e))));
        if (doctorsToFilter.length === 0){
            visitsModifier(noFilterVisits)
        }
    },[doctorsToFilter])

    useEffect(()=>{
        setDoctors(noFilterVisits.map(value => value.doctor).filter((object, index, self) =>
            index === self.findIndex((obj) => obj.email === object.email && obj.lastName === object.lastName && obj.firstName === object.firstName)))
    },[noFilterVisits,setDoctors])

    return(
        <FilterBody>
                {doctors.map((doctor,i)=>(
                    <>
                        <input key={i}   type="checkbox" value={doctor.email} onChange={handleCheckChange} />
                        <label key={i} style={{ marginLeft: 8 }}>{doctor.email}</label>
                    </>
                    ))}
        </FilterBody>
    )
}