import styled from "styled-components";
import TextField from "@mui/material/TextField";



export const WindowRegistration = styled.div`
  position: relative;
  top: -40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 64px;
`
export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #1784B3;
  padding: 2rem;
  width: 25rem;
  border-radius: 3rem;
  box-shadow: 2rem 3rem 5rem #ccc;
  @media(max-width: 768px){
    width: 20rem;
    padding: 1rem;
  }
`
export const Fields = styled.div`
  margin: 3rem;
  @media(max-width: 768px){
    margin: 1rem;
  }
`

export const StyledTextField = styled(TextField)`

`

export const WelcomeText = styled.div`
  font-family: 'Montserrat';
  align-self: center;
  font-size: 2.5rem;
  letter-spacing: 0.2px;
`

export const InputField = styled.input`
  width: 246px;
  height: 50px;
  border-radius: 10px;
`

export const RegisterButton = styled.button`
    margin-top: 40px;
  margin-left:40px;
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
`

