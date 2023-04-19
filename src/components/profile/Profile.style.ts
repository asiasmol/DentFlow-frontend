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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContent = styled.div`
  position: relative;
  z-index: 101;
  background-color: #fff;
  width: 500px;
  padding: 20px;
`;

export const ModalHeader = styled.h3`
  font-size: 24px;
  margin: 0;
  margin-bottom: 20px;
`;

export const ModalBody = styled.div`
  margin-bottom: 20px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #0077ff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056d3;
  }
`;