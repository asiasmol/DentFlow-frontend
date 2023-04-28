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
export const DayBody = styled.div<{row:number,column:number,isToday:boolean}>`
  grid-column: ${props => props.column};
  grid-row: ${props => props.row} ;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.isToday ? '#1784B3' : ""};
  border-radius: ${props => props.isToday ? '100px' : ""};
  opacity: ${props => props.isToday ? '50%' : ""};
  color: ${props => props.isToday ? 'white' : ""};;
`;
export const DayLabel = styled.p`
  //gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 70%;
`;



