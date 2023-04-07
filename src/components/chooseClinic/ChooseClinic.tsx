import React, {useCallback, useEffect, useState} from "react";
import {ClinicResponse} from "../../models/api/ClinicResponse";
import {ClinicApi} from "../../api/ClinicApi";
import {MyClinic} from "../clinic/MyClinic";
import {ChooseClinicSelect} from "./ChooseClinicSelect";

export const ChooseClinic = () => {
    const [myclinic, setMyClinic] = React.useState<ClinicResponse>();


    const fetchClinics= useCallback(async () => {
        try {
            // setIsLoading(true);
            const result = await ClinicApi.getMyClonic();
            setMyClinic(result.data);
        } finally {
            // setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchClinics();
    }, [fetchClinics])


    return (
        <>
            {!myclinic ? (
                <ChooseClinicSelect/>
            ):(
                <MyClinic id={myclinic.id} name={myclinic.name}/>
            )}


    </>
);
};
