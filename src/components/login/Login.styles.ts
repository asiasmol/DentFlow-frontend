import styled from "styled-components";


export const LoginContainer = styled.div`
  //position: fixed;
  //top: 50%;
  //left: 50%;
  //transform: translate(-50%, -50%);
  margin: 40px auto;
  width: 500px;
  height: 555px;
  display: flex;
  background: #1784B3;
  border: 2px solid rgba(84, 166, 204, 0.92);
  border-radius: 30px;
  color: white;
  box-shadow: 0 0 70px rgba(84, 166, 204, 0.92);
  align-items: center;
  flex-direction: column;

  @media (max-width: 767px) {
    width: 25rem;
    height: 30rem;
  }
  @media (max-width: 450px) {
    width: 15rem;
    height: 22rem;
  }
`;

export const LoginInfoText = styled.h1`
    margin-top: 100px;
    @media (max-width: 767px) {
    top:0;
    left:30%
  ;
  }
   @media(max-width: 767px){  
     margin-top: 40px;
    left:35%;
    top:0;
  }
  @media (max-width: 450px) {
    margin-top: 20px;
    left:35%;
    top:0;
    margin-bottom: 3px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 20rem;
  margin-top: 16px;
  @media (max-width: 450px) {
    width:15rem;
  }

`;

export const LoginInput = styled.input`
  padding: 6px 12px;
  font-size: 18px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  outline: transparent solid 2px;
  @media (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
    width:15rem;
  }
  @media (max-width: 450px) {
    margin-left: auto;
    margin-right: auto;
    width:10rem;
    height: 1rem;
  }
`;

export const LoginButton = styled.button`
  margin-top: 40px;
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

  &:disabled {
    background-color: #cccccc;
    color: #666666;
  }

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
`;

export const ValidationError = styled.span`
  color: red;
  font-size: 13px;
  @media(max-width:767px){
  position:relative;
  left:2rem;
  }
  @media (max-width: 450px) {
    sition:relative;
    left:2rem;
  }
  
`

export const PasswordLabel = styled.label`

    @media(max-width:767px){
    position:relative;
    left:2rem;
    }
`

export const EmailLabel = styled.label`
    @media(max-width:767px){
    position:relative;
    left:2rem;
    }
  
`
