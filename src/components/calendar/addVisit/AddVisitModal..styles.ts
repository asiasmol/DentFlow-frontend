import styled from "styled-components";
import {Autocomplete} from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
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
  width: 36rem;
  height: 55rem;
  background: #ffffff;
  border: 3px solid #1784b3;
  border-radius: 1rem;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
`;
export const StyledTextarea = styled(TextareaAutosize)`
  width: 18.4rem;
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  margin-top: 2rem;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-color: #9a9a9a;

  &:hover {
    border-color: #131313;
  }

  &:focus {
    border-color: #2f8bb4;
  }
`;


export const AutocompleteTime = styled(Autocomplete)`
  width: 9rem;
`;

export const InputsTime = styled.div`
  display: flex;
  gap: 3rem;
`;