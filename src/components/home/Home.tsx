import { HomeContainer, StyledHeading} from "./Home.styles";
import {useCallback, useEffect, useState} from "react";
import {ClinicApi} from "../../api/ClinicApi";
import {ClinicResponse} from "../../models/api/ClinicResponse";

export const Home = () => {
    const [clinics,SetClinic] = useState<ClinicResponse[]>([]);
    const fetchClinics = useCallback(async ()=>{
        const res = await ClinicApi.getAll()
        SetClinic(res)
    },[])
    useEffect(()=>{
        fetchClinics()

    },[])

  return (
    <HomeContainer>
      <StyledHeading>Hello</StyledHeading>
        <ul>
            {clinics.map(clinic =>
                <>
                    <li>{clinic.id}</li>
                    <li>{clinic.name}</li>
                    <li>{clinic.password}</li>
                </>
            )}
        </ul>
    </HomeContainer>
  );
};
