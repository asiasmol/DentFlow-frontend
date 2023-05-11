import styled from "styled-components";
import {Autocomplete, RadioGroup, FormLabel} from "@mui/material";

export const AutocompleteEmail = styled(Autocomplete)`
  margin-bottom: 3rem;
  @media(max-width: 950px) {
    width: 14rem;
    margin: 2rem auto;
    display: flex;
  }
`;

export const FormLabelStyled = styled(FormLabel)`
  margin-left: 3rem;
`;

export const RadioGroupStyled = styled(RadioGroup)`
  margin-left: 4rem;
`;
