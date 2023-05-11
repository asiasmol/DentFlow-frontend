import styled from 'styled-components';

export const SlidebarBody = styled.div`
  float: left;
  width: 15%;
  height: 550px;
`;

export const HeaderLabel = styled.div`
`;
export const SlidebarHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Arrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius:20px;
    width:22px;
    height:22px;
  :last-child{
    margin-left: 0;
  }
  :hover{
    background-color: lightgray;
    opacity: 0.5;
  }
`;

export const FilterBody = styled.div`
`;

