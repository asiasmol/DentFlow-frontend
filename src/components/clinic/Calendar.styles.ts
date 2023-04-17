import styled from "styled-components";

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Weekdays = styled.div`
  display: flex;
`;

export const Weekday = styled.div`
  flex: 1;
  text-align: center;
`;

export const Days = styled.div`
  display: flex;
`;

export const Day = styled.div`
  flex: 1;
`;

export const Hours = styled.div`
  display: flex;
  flex-direction: column;
  //flex-wrap: wrap;
`;

export const Hour = styled.div`
  flex-basis: 25%;
  padding: 4px;
  cursor: pointer;
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