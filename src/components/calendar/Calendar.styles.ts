import styled from 'styled-components';

export const HScreen = styled.div`
 height: auto;
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
`;
export const HeaderLabel = styled.h1`
  float: right;
  color: black;
  margin-left: 50px;
  margin-top: -3px;
  margin-right:10px;
`;
export const Arrow = styled.h1`
  float: right;
  cursor:pointer;
  color: black;
  margin-top: -3px;
  border-radius:50px;
  height:75%;
  font-size: 1.5rem;
  width:1.5%;
  text-align: center;
  
  &:hover {
       background-color:lightgrey;
       
     }
`;
export const CalendarHeaderBody = styled.div`
  width: 100%;
  float: right;
  height: 50px;
  display:flex;
  direction:row;
  justify-content:end;
  padding-top: 20px;
  padding-right:30px;
  padding-bottom:10px;

`;
export const BackButton = styled.button`
  float: right;
  cursor:pointer;
  color: white;
  margin-top: -3px;
  background-color:#FFBE5C;
  border-radius:5px;
  height:75%;
  width:5%;
  border:0;
  text-align: center;
  margin-right: 0.3%;
  
  &:hover {
       filter: brightness(90%);
     }
`;

export const BackVisitButton = styled.button`
  float: right;
  cursor:pointer;
  color: white;
  margin-top: -3px;
  background-color:#FFBE5C;
  border-radius:5px;
  height:75%;
  width:5%;
  border:0;
  text-align: center;
  margin-right: 24.3%;
  
  &:hover {
       filter: brightness(90%);
     }
`;



