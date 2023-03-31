import { HomeContainer, StyledHeading} from "./Home.styles";
import {useCallback, useEffect, useState} from "react";
import {ClinicApi} from "../../api/ClinicApi";
import {ClinicResponse} from "../../models/api/ClinicResponse";
import {AuthApi} from "../../api/AuthApi";

export const Home = () => {
    // const [clinics,SetClinic] = useState<ClinicResponse[]>([]);
  return (
    <HomeContainer>
      <StyledHeading>Hello</StyledHeading>
    </HomeContainer>
  );
};
