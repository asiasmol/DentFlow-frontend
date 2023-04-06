import styled from "styled-components";
import Box from "@mui/material/Box";


export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 64px;
`;

export const StyledHeading = styled.span`
    font-size: 36px;
    font-weight: 600;
    margin-top: 32px;
    margin-bottom: 8px;
`;

export const TableDiv = styled(Box)`
  height: 318px;
  width: 50%;
  padding-right: 5rem;
  padding-left: 5rem;
  flex: 2;
  @media(max-width: 768px){
    padding-right: 1rem;
    flex-direction: column;
    padding-left: 1rem;
  }
`;

export const ProfileDiv = styled.div`
  margin-left: 5rem;
  flex: 1;
  @media(max-width: 768px){
    margin-left: 1rem;
    flex-direction: column;
  }
`;

