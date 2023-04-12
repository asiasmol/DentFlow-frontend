import styled from "styled-components";
import home from "../../resources/img/home.png"
import Typography from "@mui/material/Typography";


export const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${home});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: local;
  background-position: center;
  @media(max-width: 950px){
    height: 100%;
  }
`

export const BorderContainer = styled.div`
  padding: 2rem;
  margin-right: 15rem;
  margin-left: 10rem;
  @media(max-width: 900px){
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
    width: 16rem;
  @media(max-width: 950px){
    margin-right: 25%;
  }
`
export const Links = styled.div`
  margin-top: 2%;
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
`
export const HomeButton = styled.button<{width:number}>`
  background-color: #FFBE5C;
  color: white;
  height: 5rem;
  font-size: 28px;
  width: ${props => props.width}rem;
  cursor: pointer;
  margin-right: auto;
  border: none;
  border-radius: 10px;
  margin-left: 1.5rem;
  @media(max-width: 950px){
    margin-top: 2rem;
  }
`
export const TextArea = styled.div`
  color: white;
`

export const ContactForm = styled.div`
  width: 36rem;
  height: 50rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 1rem 2rem 3rem rgba(0, 0, 0, 0.25);
  margin-top: 5rem; 
  display: flex;
  flex-direction: column;
`
export const ContactHero = styled(Typography)`
  white-space: nowrap;
  color: #1784B3;
  font-weight: bold;
  align-self: center;
`
export const ContactInputs = styled.div`
  width: 20rem;
  height: 30rem;
  margin-top: 2rem;
  align-self: center;
  margin-left: 2rem;
  margin-right: 2rem;
`