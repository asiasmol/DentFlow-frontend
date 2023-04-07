import styled from "styled-components";
import FormControl from '@mui/material/FormControl';

export const MainContainer = styled.div`
  margin: auto;
  margin-bottom: 0;
  padding: 5rem;
  padding-bottom: 0;
  text-align: center;
  width: 30rem;
  height: 20rem;
    @media (max-width: 768px) {
      padding: 1rem;
      width: 15rem;
    }
`;
export const ChooseClinicLabel = styled.h1`
  color: #1784B3;
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0rem;
    width: 15rem;
  }
`;
export const FormSelect = styled(FormControl)`
  width: 20rem;
  @media (max-width: 768px) {
    width: 10rem;
  }
`;
export const ClinicButton = styled.button`
  background-color: #FFBE5C;
  font-size: 1.5rem;
  font-family: 'Montserrat',serif;
  border: none;
  color: white;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 7px;
  width: 10rem ;
  height: 4rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    width: 6rem ;
    height: 3rem;
  }
  &:disabled {
    background-color: #cccccc;
    color: #666666;
  }
  &:hover {
    filter: brightness(85%);
  }
`;