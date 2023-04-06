import styled from "styled-components";
import home from "../../resources/img/home.png"
import Typography from "@mui/material/Typography";
export const HomeContainer = styled.div`
  display: grid;
  grid-gap: 5rem;
  height: 100vh;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  background-image: url(${home});
  background-repeat: no-repeat;
  background-size: cover;
`

export const HomeHeader = styled.nav`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  padding: 10px;
  gap: 10px;
  margin: 2rem 5rem;
  white-space: nowrap;
`
export const Logo = styled.img`
  grid-column: 1/1;
  max-width: 14rem;
`
export const Links = styled.div`
  grid-column: 3/5;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  margin-top: 3%;
  grid-gap: 15%;
`
export const HomeLink = styled.div`
  font-size: 1.5rem;
  margin-left: 5%;
  white-space: nowrap;
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
`
export const TextArea = styled.div`
  grid-column: 2/3;
  grid-row: 4/6;
  color: white;
  white-space: nowrap;
`

export const ContactForm = styled.div`
  width: 36rem;
  height: 50rem;
  grid-column: 6/10;
  grid-row: 3/6;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 1rem 2rem 3rem rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(10, 1fr);
  margin-right: 8rem;
`
export const ContactHero = styled(Typography)`
  grid-column: 4;
  white-space: nowrap;
  color: #1784B3;
  font-weight: bold;
`
export const ContactInputs = styled.div`
  grid-column: 4;
  grid-row: 3/8;
  width: 20rem;
  height: 30rem;
  margin-top: 2rem;
`