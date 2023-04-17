import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

export const StyledHeading = styled.h1`
    font-size: 40px;
    font-weight: 600;
    margin-top: 32px;
    margin-bottom: 8px;
`

export const Menu = styled.div`
  display: flex;
  width: 100%;
  margin-left: 2rem;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin-top: 3rem;
    flex-direction: column;
    position: absolute;
    top: 70px;
    margin-left: auto;
    background-color: white;
    width: 100%;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
  }
`;
export const MenuItems = styled.ul`
  @media (max-width: 768px) {
    background-color: white;
    display: flex;
    flex-direction: column;
  }
`

export const MenuItem = styled.a`
  text-decoration: none;
  color: black;
  margin-right: 20px;
  font-size: 28px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin: 0.5rem 0;
    
    color: black;
  }
`;
export const LoginInput = styled.input`
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