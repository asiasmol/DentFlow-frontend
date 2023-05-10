import styled from 'styled-components';

export const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 5rem;
    margin-bottom: 5rem;

  @media(max-width: 950px) {
    
  }
  
`

export const HeadingText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  font-family: Serif,serif;
`

export const Prices = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin-left: 50%;
  margin-right: 50%;
  @media only screen and (max-width: 950px){
    flex-direction: column;
    align-items: center;
  }
`