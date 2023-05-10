import styled from 'styled-components';

export const MonthBody = styled.div`
  display: grid;
  margin: 10px;
  grid-template-columns: repeat(7,1fr);
  grid-template-rows: repeat(6,1fr);
`;
export const MonthHeader = styled.div<{row:number,column:number}>`
  grid-column: ${props => props.column};
  grid-row: ${props => props.row} ;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DayBody = styled.div<{row:number,column:number,isToday:boolean,isSelected:boolean}>`
  grid-column: ${props => props.column};
  grid-row: ${props => props.row} ;
  cursor: pointer;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background-color: ${props => props.isToday ? '#1784B3': props.isSelected ? '#1784B3' : ""};//: props.isSelected ? 'red'
  opacity: ${props => props.isToday ? '50%' : props.isSelected ? '30%' : ""};
  color: ${props => props.isToday ? 'white': props.isSelected ?'white' : ""};
  :hover{
    background-color: ${props => props.isToday ? '#1784B3': props.isSelected ? '#1784B3' : "lightgrey"};//:
    opacity: ${props => props.isToday ? '70%' : props.isSelected ? '50%' : "50%"};
  }
`;
export const DayLabel = styled.p`
  //gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 70%;
`;



