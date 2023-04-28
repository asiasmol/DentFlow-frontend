import styled from 'styled-components';

export const HScreen = styled.div`
  //flex-direction: column;
`;
export const Toggle = styled.div`
  cursor: pointer;
  z-index: 2;
  position: fixed;
  margin-bottom: -50px;
  height: 50px;
  width: 50px;

  span {
    display: block;
    height: 3px;
    width: 25px;
    margin: 10px auto 5px;
    background: black;
  }
`;

export const CalendarBody = styled.div`
  width: 100%;
  height: 550px;
`;
export const HeaderLabel = styled.h1`
  float: right;
  color: black;
  margin-left: 50px;
  margin-top: -3px;
`;
export const Arrow = styled.h1`
  float: right;
  cursor:pointer;
  color: black;
  margin-top: -3px;
`;
export const CalendarHeaderBody = styled.div`
  width: 100%;
  float: right;
  height: 50px;
`;
export const BackButton = styled.button`
  float: right;
`;



