import styled from "styled-components";
import home from "../../resources/img/home.png"
import Typography from "@mui/material/Typography";


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
  //@media(max-width: 950px){
  //  margin-left: 2rem;
  //}

  @media only screen and (max-width: 1500px){
    flex-direction: column;
    align-items: center;

    //padding: 0.5rem;
    margin-right: 4rem;
    margin-left: 4rem;
  }
  
  
  
  @media only screen and (max-width: 950px){
    //flex-direction: column;
    //align-items: center;

    padding: 0.5rem;
    margin-right: 2rem;
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
    //margin-right: 25%;
  }

  @media(max-width: 1200px){
    width: 5rem;
    height: 2.5rem;
    //margin-right: 25%;
    margin-top: 1.4rem;
    
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
    //margin-top: 1rem;
    font-size: 1.3rem;
  }

  @media(max-width: 1250px){
    //margin-top: 1rem;
    font-size: 1rem;
    display: none;
  }

  @media(max-width: 950px){
    //margin-top: 1rem;
    font-size: 1.3rem;
    //display: none;
  }
`

export const H1 = styled.div`
  font-size: 4.5rem;
  font-family: Montserrat; 
  
  @media(max-width: 1500px){
    //margin-top: 1rem;
    font-size: 3rem;
  }

  @media(max-width: 1250px){
    //margin-top: 1rem;
    font-size: 3rem;
    //display: none;
  }

  @media(max-width: 950px){
    //margin-top: 1rem;
    font-size: 3rem;
    //display: none;
  }
`

export const H2 = styled.div`
  font-size: 2.1rem;
  font-family: Montserrat; 
  margin-bottom: 2rem;
  
  //@media(max-width: 1500px){
  //  //margin-top: 1rem;
  //  font-size: 3rem;
  //}

  @media(max-width: 1250px){
    //margin-top: 1rem;
    font-size: 1.5rem;
    //display: none;
  }

  @media(max-width: 950px){
    margin-top: 1rem;
    //font-size: 1.3rem;
    //display: none;
  }
`
export const HomeButton = styled.button<{ marginTop: number}>` //width:number,
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
  
  @media(max-width: 1500px){
    height: 2.1rem;
    width: 9rem;
    font-size: 0.8rem;
    //margin-top: auto;
  }

  @media(max-width: 1250px){
    height: 1.9rem;
    width: 7.8rem;
    font-size: 0.7rem;
  }

  //@media(max-width: 950px){
  //  height: 1.5rem;
  //  width: 6rem;
  //  font-size: 0.6rem;
  //  margin-top: auto;
  //}
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
  }
  
  
`
export const ContactHero = styled.div`
  white-space: nowrap;
  color: #1784B3;
  font-weight: bold;
  font-size: 3rem;
  align-self: center;
  font-family: Montserrat;
  margin-bottom: 2rem;
  margin-top: 2rem;

  @media(max-width: 950px) {
    font-size: 1.8rem;
  }
  
  
  
`
export const ContactInputs = styled.div`
  width: 20rem;
  height: 30rem;
  margin-top: 2rem;
  align-self: center;
  margin-left: 2rem;
  margin-right: 2rem;

  @media(max-width: 950px) {
    width: 10rem;
    height: 15rem;
    margin-top: 1rem;
    align-self: center;
    margin-left: 0.1rem;
    margin-right: 1rem;
  }
`

export const PriceContainer = styled.div`
  position: absolute;
  width: 1440px;
  height: 1116px;
  //left: 0px;
  top: 2565px;

  /* light-gray-1 */

  background: #FAFAFA;
`

