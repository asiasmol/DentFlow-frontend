import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
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
  color: black;
  margin-right: 1rem;
  cursor: pointer;
  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;
export const Login = styled.button`
`