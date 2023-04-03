import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #1784B3;
`;

export const Logo = styled.img`
  font-size: 1.5rem;
  width: 9%;
`;

export const Toggle = styled.div`
  display: none;
  cursor: pointer;
  span {
    display: block;
    height: 2px;
    width: 25px;
    margin-bottom: 5px;
    background: black;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20px;
  }
`;

export const Menu = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    background: white;
    width: 100%;
    transition: all 0.3s ease-in-out;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    overflow: hidden;
  }
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: white;
  margin-right: 1rem;
  cursor: pointer;
  @media (max-width: 768px) {
    margin: 0.5rem 0;
    color: black;
  }
`;
export const Login = styled.button`
    background-color: #FFBE5C;
  color: white;
  border: none;
  width: 70px;
  height: 35px;
  border-radius: 10px;
    
`