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
`
export const Description = styled.input`
  
`