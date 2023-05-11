import styled from "styled-components";

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
  width: 26rem;
  height: 500px;
  background: #ffffff;
  border: 3px solid #1784b3;
  border-radius: 1rem;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
`;

export const ModalLabelHeader = styled.div`
  font-size: 30px;
  text-align: center;
`;
export const ModalLabel = styled.div`
  font-size: 20px;
  text-align: left;
  padding-left: 30px;
`;
export const ModalTextArea = styled.textarea`
  margin-right: 30px;
  height: 80px;
  margin-left: 30px;
  resize: none;
  border: 3px solid #1784b3;
  border-radius: 1rem;
`;
export const ModalTimeOptions = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
`;
export const ModalTimeInput = styled.input`
  border: 1px solid #1784b3;
  border-radius: 0.2rem;
`;
export const AddEmplyeeInput = styled.input`
  margin-left:50px ;
  width: 100px;
  border: 1px solid #1784b3;
  border-radius: 0.2rem;
`;
export const SearchList = styled.ul`
  
`

export const SearchElement = styled.li``
export const ModalButton = styled.button``