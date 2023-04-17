import styled from "styled-components";

export const MainContainer = styled.div`
  margin: auto;
  margin-bottom: 0;
  padding: 5rem;
  padding-bottom: 0;
  text-align: center;
  width: 30rem;
  height: 20rem;
    @media (max-width: 768px) {
      padding: 1rem;
      width: 15rem;
    }
`;
export const AddEmplyeeInput = styled.input`
  padding: 6px 12px;
  font-size: 18px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  outline: transparent solid 2px;
  @media (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
    width:15rem;
  }
  @media (max-width: 450px) {
    margin-left: auto;
    margin-right: auto;
    width:10rem;
    height: 1rem;
  }
`;
export const SearchList = styled.ul``

export const SearchElement = styled.li``
export const AddEmplyeeButton = styled.button`
  margin-top: 40px;
  bottom: 10%;
  width: 320px;
  padding: 16px;
  border: 0;
  background-color: rgb(255, 190, 92);
  border-radius: 8px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;

  &:disabled {
    background-color: #cccccc;
    color: #666666;
  }

  &:hover {
    filter: brightness(85%);
  }
  
  
  @media (max-width: 767px) {
    bottom:-40%;
    width:15rem;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 450px) {
    bottom:-40%;
    font-size: 0.8rem;
    width:5rem;
    height: 3rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
    padding:0;
  }
`;
