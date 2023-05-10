import styled from 'styled-components';

export const WeekBody = styled.div<{isOpen:boolean}>`
  float: left;
  width: ${props => props.isOpen ? '85%' : '100%'};
  display: grid;
  grid-template-columns: repeat(7,1fr);
`;
export const DayBody = styled.div<{column:number}>`
  height: fit-content;
  grid-column: ${props => props.column};
  border-left: 1px solid #1784B3;
  border-right: 1px solid #1784B3;
  text-align: center;
  display: grid;
  grid-template-rows: repeat(13,1fr);
  
  :first-child{
    border-left: none;
    margin-left: 30px;
  }
  :last-child {
    border-right: none;
    margin-right: 30px;
  }
`;
export const DayLabel = styled.p`
  margin: 0;
  padding: 0;
  height: fit-content;
  font-size: 1.5rem;
`;
export const DayTextLabel = styled.p`
  margin: 0;
  padding: 0;
  height: fit-content;
  font-size: 1rem;
`;
export const DayBodyHeader = styled.div<{isToday:boolean}>`
  margin: 0;
  padding: 0;
  color: ${props => props.isToday ? '#FFBE5C' : "black"};//#FFBE5C
  height: fit-content;
  grid-row: 0;
`;

export const HourHeader = styled.div`
  position:absolute;
  margin-top:-8px;
  margin-right: auto;
  //margin-left:auto;
  font-size: 70%;
  color:#1784B3;
  background:white;
  border-radius:10px;
`;
export const Hour = styled.div<{row:number}>`
  border-top: 1px solid #1784B3;
  height: 65px;
  margin-left: 5px;
  margin-right: 5px;
  grid-row: ${props => props.row};
  display: flex;
  span {
    text-align: center;
    margin-top: -10px;
  }
`;

export const Visit = styled.div<{min:number}>`
  border: 1px solid #1784B3;
  width: 100%;
  margin-top: ${props => props.min}px;
  height: 30px;
  font-size: 80%;
  color: #fff;
  background-color: #1784B3;
  float: right;
  opacity: 0.5;
  margin-left: 10px;
  justify-content: space-between;
  align-items: center;
`;
