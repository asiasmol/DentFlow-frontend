import styled from "styled-components";
import home from "../../resources/img/home.png"
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";



export const HomeContainer = styled.div`
  background-image: url(${home});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: local;
  background-position: center;
`

export const BorderContainer = styled.div`
  padding: 2rem;
  margin-right: 5rem;
  margin-left: 5rem;

  @media only screen and (max-width: 1500px){
    flex-direction: column;
    align-items: center;
    margin-right: 4rem;
    margin-left: 4rem;
  }
  
  
  @media only screen and (max-width: 950px){
    padding: 0.5rem;
    margin-left: 2rem;
  }
`

export const HomeHeader = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Logo = styled.img`
    width: 10rem;
    height: 5rem;
    margin-top: 7.5%;
    
  @media(max-width: 1500px){
    width: 8rem;
    height: 4rem;
    margin-top: 8%;
  }

  @media(max-width: 1200px){
    width: 5rem;
    height: 2.5rem;
    margin-top: 1.7rem;
    
  }
  
  
`

export const Links = styled.div`
  margin-top: 2.2rem;
  gap: 3rem;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  
  @media(max-width: 950px){
    display: flex;
    flex-direction: column;
  }
`

export const HomeLink = styled.div`
  font-size: 1.6rem;
  
  @media(max-width: 1500px){
    font-size: 1.3rem;
  }

  @media(max-width: 1250px){
    font-size: 1rem;
    display: none;
  }

  @media(max-width: 950px){
    font-size: 1.3rem;
  }
`

export const H1 = styled.div`
  font-size: 4.5rem;
  font-family: Montserrat; 
  
  
  
  @media(max-width: 1590px){
    font-size: 4.5rem;
    text-align: center;
  }

  @media(max-width: 1250px){
    font-size: 4rem;
    text-align: center;
  }

  @media(max-width: 950px){
    margin-top: 1rem;
    font-size: 3rem;
    text-align: center;
    
  }
`

export const H2 = styled.div`
  font-size: 2.1rem;
  font-family: Montserrat; 
  margin-bottom: 2rem;
  
  @media(max-width: 1590px){
    text-align: center;
  }

  @media(max-width: 1250px){
    font-size: 1.5rem;
    text-align: center;
  }

  @media(max-width: 950px){
    margin-top: 1rem;
    font-size: 1rem;
    text-align: center;
  }
`

export const H3 = styled.div`
  font-size: 2.1rem;
  font-family: Montserrat; 
  margin-bottom: 2rem;
  color: #737373;
  
  @media(max-width: 1590px){
    text-align: center;
  }

  @media(max-width: 1250px){
    font-size: 1.6rem;
    text-align: center;
  }

  @media(max-width: 950px){
    margin-top: 1rem;
  }

  @media(max-width: 790px){
    margin-top: 1rem;
    font-size: 1rem;
    text-align: center;
  }
`

export const HomeButton1 = styled.button<{ marginTop: number}>` //width:number,
  background-color: #FFBE5C;
  color: white;
  height: 2.5rem;
  width: 11.5rem;
  font-size: 1rem;
  
  
  margin-top: ${props => props.marginTop}rem;
  cursor: pointer;
  margin-right: auto;
  border: none;
  border-radius: 10px;
  margin-left: 1rem;
  align-content: space-between;
  justify-content: center;
  
  @media(max-width: 1590px){
    height: 2.1rem;
    width: 9rem;
    font-size: 0.8rem;

    background-color: #FFBE5C;
    color: white;
    margin-top: ${props => props.marginTop}rem;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
    margin-right: auto;
    flex-direction: row;
    
  }

  @media(max-width: 1250px){
    height: 1.9rem;
    width: 7.8rem;
    font-size: 0.7rem;
  }
`

export const HomeButton2 = styled.button` //width:number,
  background-color: #FFBE5C;
  color: white;
  height: 2.5rem;
  width: 11.5rem;
  font-size: 1rem;


  margin-top: 1rem;
  cursor: pointer;
  margin-right: auto;
  border: none;
  border-radius: 10px;
  margin-left: auto;
  display: block;
  
  @media(max-width: 1400px){
    height: 1.9rem;
    width: 7.8rem;
    font-size: 0.7rem;

    background-color: #FFBE5C;
    color: white;
    margin-top: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    flex-direction: row;
    
  }

  @media(max-width: 950px){
    height: 1.9rem;
    width: 7.8rem;
    font-size: 0.7rem;
    margin-right: auto;
    margin-left: auto;
    margin-top: 1rem;
    display: block;
  }
`

export const HomeButton3 = styled.button<{ marginTop: number}>` //width:number,
  background-color: #FFBE5C;
  color: white;
  height: 2.5rem;
  width: 11.5rem;
  font-size: 1rem;
  
  
  margin-top: ${props => props.marginTop}rem;
  cursor: pointer;
  margin-right: auto;
  border: none;
  border-radius: 10px;
  margin-left: 1rem;
  align-content: space-between;
  justify-content: center;

  @media(max-width: 1590px){
    height: 2.1rem;
    width: 9rem;
    font-size: 0.8rem;

    background-color: #FFBE5C;
    color: white;
    margin-top: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    flex-direction: row;

  }

  @media(max-width: 950px){
    height: 1.9rem;
    width: 7.8rem;
    font-size: 0.7rem;
    margin-right: auto;
    margin-left: auto;
    margin-top: 1rem;
    display: block;
  }
`

export const TextArea = styled.div`
  color: white;
  
`

export const ContactForm = styled.div`
  width: 32rem;
  height: 40rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 1rem 2rem 3rem rgba(0, 0, 0, 0.25);
  margin-top: 5rem; 
  display: flex;
  flex-direction: column;
  
  @media(max-width: 950px) {
    width: 20rem;
    height: 30rem;
    margin-right: auto;
    margin-left: auto;
  }
`

export const ContactHero = styled.div`
  white-space: nowrap;
  color: #1784B3;
  font-weight: bold;
  font-size: 3rem;
  align-self: center;
  font-family: Montserrat;
  margin-bottom: 1rem;
  margin-top: 3rem;
  flex-direction: column;

  @media(max-width: 950px) {
    font-size: 1.8rem;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
`

export const ContactInputs = styled.div`
  width: 20rem;
  height: 30rem;
  margin-top: 2rem;
  align-self: center;
  margin-left: 2rem;
  margin-right: 2rem;
  flex-direction: column;
`

export const PriceContainer = styled.div`
  position: absolute;
  width: 1440px;
  height: 1116px;
  top: 2565px;

  background: #FAFAFA;
`

export const StyledTextFieldMedium = styled(TextField)`
  && {
    display: flex;
    width: 100%;
    margin-top: 1rem;
    padding: 0;
    .MuiInputLabel-root {
      font-weight: normal;
    }
    .MuiInputBase-input {
      font-size: 16px;
    }
  }

  @media(max-width: 950px) {
    && {
      display: none;
      width: 80%;
      margin-top: 1rem;
      padding: 0;
      .MuiInputLabel-root {
        font-size: 14px;
      }
      .MuiInputBase-input {
        font-size: 14px;
      }
    }
  }
`;

export const StyledTextFieldSmall = styled(TextField)`
  && {
    display: none;
    width: 80%;
    margin: 0;
    padding: 0;
    .MuiInputLabel-root {
      font-weight: normal;
    }
    .MuiInputBase-input {
      font-size: 16px;
    }
  }

  @media(max-width: 950px) {
    && {
      display: flex;
      width: 70%;
      margin-right: auto;
      margin-left: auto;
      padding: 0;
      .MuiInputLabel-root {
        font-size: 14px;
      }
      .MuiInputBase-input {
        font-size: 14px;
      }
    }
  }
`;


export const StyledDatePickerMedium = styled(DatePicker)`
  && {
    width: 100%;
    padding: 0;
    margin-top: 1rem;
    margin-bottom: 2rem;
    .MuiInputLabel-root {
      font-weight: normal;
    }
    .MuiInputBase-input {
      font-size: 16px;
    }
  }

  @media (max-width: 950px) {
    && {
      display: none;
    }
  }
`;

export const StyledDatePickerSmall = styled(DatePicker)`
  && {
    display: none;
    width: 100%;
    margin: 0;
    padding: 0;
    .MuiInputLabel-root {
      font-weight: normal;
    }
    .MuiInputBase-input {
      font-size: 16px;
    }
  }

  @media (max-width: 950px) {
    && {
      display: flex;
      width: 70%;
      margin-right: auto;
      margin-left: auto;
      padding: 0;
      .MuiInputLabel-root {
        font-size: 14px;
      }
      .MuiInputBase-input {
        font-size: 14px;
      }
    }
  }
`;