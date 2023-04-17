import styled from "styled-components";
import TextField from "@mui/material/TextField";



export const WindowRegistration = styled.div`
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
  background-color: #c5d4ff;
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
  margin: 4rem;
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

