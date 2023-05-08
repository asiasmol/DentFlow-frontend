import styled from 'styled-components';

export const DayBody = styled.div<{isOpen:boolean}>`
  float: left;
  width: ${props => props.isOpen ? '85%' : '100%'};;
  display: grid;
  grid-template-columns: repeat(3,1fr);
`;

export const VisitBody = styled.div`
  grid-column: span 2;
  display: grid;
  grid-template-columns: repeat(2,1fr);
`
export const VisitOptions = styled.div`
  grid-column: 2;
  display:grid;
  grid-template-rows:repeat(2,1fr);
`
export const Description = styled.input`
    grid-row: 1;
`

export const TeethOptions = styled.div`
    display:grid;
    grid-template-columns: repeat(2,1fr);
    grid-row:2;
   
`

export const ToothDescription = styled.div`
    display:flex;
    flex-direction:column;
    grid-column:1;
`

export const ToothStatus = styled.div`
    grid-column:2;
    display:flex;
    flex-direction:column;
`

export const StatusLabel = styled.label`
`

export const StatusCheckbox = styled.input`
`

export const ToothDescriptionTextField = styled.input`

`

export const ToothDescriptionHistory = styled.div`
`

export const ToothDescriptionHistoryElement = styled.div`
`