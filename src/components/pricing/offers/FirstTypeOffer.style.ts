import styled from 'styled-components';
import { CheckCircle } from 'react-bootstrap-icons';

export const FirstOfferContainer = styled.div`
  box-sizing: border-box;
  border: 1px solid #23A6F0;
  border-radius: 10px;
  //margin-top: 1rem;
  //background: #FAFAFA;
  padding: 2.8rem;
  //display: flex;
  align-items: center;
  
  
  
  @media(max-width: 950px) {
    padding: 1.5rem;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //background: #FAFAFA;
`

export const PriceArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 2rem;
  //background: #FAFAFA;
  
  
  @media(max-width: 790px) {
    margin-top: 1rem;
  }
`

export const OfferParam = styled.div`
  //display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  //background: #FAFAFA;
`

export const OfferIcon = styled.div`
  display: flex;
  justify-items: auto;
  flex-direction: row;
  padding-top: 1rem;
  margin-top: 1rem;
  
  //background: #FAFAFA;
  
  @media(max-width: 950px) {
    padding-top: 0.5rem;
  }
`

export const CurrencyTextArea = styled.div`
  align-items: center;
  //background: #FAFAFA;
`

export const H1 = styled.div`
  font-size: 2rem;
  font-family: Montserrat;

  //fontFamily: "Montserrat",
  font-weight: bold;
  //fontSize: "2rem",
  margin-top: 2rem;
  color: #1784B3;
  
  
  //@media(max-width: 1500px){
  //  //margin-top: 1rem;
  //  font-size: 4.5rem;
  //}
  //
  //@media(max-width: 1250px){
  //  //margin-top: 1rem;
  //  font-size: 4rem;
  //  //display: none;
  //}
  //
  @media(max-width: 1400px){
    //margin-top: 1rem;
    font-size: 1.7rem;
    //display: none;
  }
`

export const H2 = styled.div`
  font-size: 4rem;
  font-family: Montserrat;
  font-weight: bold;
  margin-left: 1rem;
  margin-right: 1rem;
  
  //display: flex;
  //align-items: center;
  color: #FFBE5C;
  
  
  //@media(max-width: 1500px){
  //  //margin-top: 1rem;
  //  font-size: 4.5rem;
  //}
  //
  //@media(max-width: 1250px){
  //  //margin-top: 1rem;
  //  font-size: 4rem;
  //  //display: none;
  //}
  //
  @media(max-width: 1400px){
    //margin-top: 1rem;
    font-size: 2.5rem;
    //display: none;
    display: flex;
    align-items: center;
    justify-self: center;
  }
`

export const H3 = styled.div`
  font-size: 1.3rem;
  font-family: Montserrat;
  font-weight: bold;
  margin-left: 1rem;
  margin-right: 1rem;
  color: #FFBE5C;
  
  
  //@media(max-width: 1500px){
  //  //margin-top: 1rem;
  //  font-size: 4.5rem;
  //}
  //
  //@media(max-width: 1250px){
  //  //margin-top: 1rem;
  //  font-size: 4rem;
  //  //display: none;
  //}
  //
  //@media(max-width: 950px){
  //  //margin-top: 1rem;
  //  font-size: 3rem;
  //  //display: none;
  //}
`

export const H4 = styled.div`
  font-size: 1.3rem;
  font-family: Montserrat;
  //font-weight: bold;
  margin-left: 1rem;
  text-space: 0.1rem;
  //margin-right: 1rem;
  //color: #FFBE5C;
  
  
  //@media(max-width: 1500px){
  //  //margin-top: 1rem;
  //  font-size: 4.5rem;
  //}
  //
  //@media(max-width: 1250px){
  //  //margin-top: 1rem;
  //  font-size: 4rem;
  //  //display: none;
  //}
  //
  @media(max-width: 1400px){
    //margin-top: 1rem;
    font-size: 1rem;
    //display: none;
  }

  @media(max-width: 790px){
    //margin-top: 1rem;
    font-size: 0.7rem;
    //display: none;
  }
`