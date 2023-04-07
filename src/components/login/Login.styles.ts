import styled from "styled-components";


export const LoginContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 555px;
    display:flex;
    background: #1784B3;
    border: 2px solid rgba(84,166,204,0.92);
    border-radius: 30px;
    color: white;
    box-shadow: 0 0 70px rgba(84,166,204,0.92);
    justify-content: center;
    align-items: center;
    
    @media (max-width: 767px) {
    width: 17rem;
    height: 25rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
  ;
  }
  @media(min-height:500;max-height:620px){
    width:20rem;
    height:25rem;
    top:55%;
    display:block;
    margin-left:auto;
    margin-right:auto;
  }
`;

export const StyledHeading = styled.span`
  font-size: 36px;
  font-weight: 600;
  margin-top: 32px;
  margin-bottom: 8px;
`;

export const LoginInfoText = styled.h1`
    position:fixed;
    top:10%;
    
    @media (max-width: 767px) {
    position:absolute;
    top:0;
    left:30%
  ;
  }
   @media(min-height:500; max-height:620px){
    position:absolute;
    left:35%;
    top:0;
  } 
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 20rem;
  margin-top: 16px;
  @media (max-width: 767px) {
    position:absolute;
    top:25%;
  ;
  }
  @media(min-height:500; max-height:620px){
    position:absolute;
    left:1rem;
    width:20rem;
    height:25rem;
    
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
    width:13rem;
    position:relative;
    left:1rem;
  ;
  }
  @media(min-height:500; max-height:620px){
    width:16rem;
    position:relative;
    top:20%;
  } 
`;

export const LoginButton = styled.button`
  position: absolute;
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
    position:absolute;
    bottom:-40%;
    width:15rem;
    left:1rem;
  ;
  }
  
  @media(min-height:500; max-height:620px){
        width:18rem;
    }
  
  
`;

export const ValidationError = styled.span`
  color: red;
  font-size: 13px;
  @media(min-height:500; max-height:620px){
        position:relative;
        top:20%
   }
   
  @media(max-width:767px){
  position:relative;
  left:1rem;
  }
  
  
`

export const PasswordLabel = styled.label`

    @media(max-width:767px){
    position:relative;
    left:1rem;
    }
    @media(min-height:500; max-height:620px){
    position:relative;
    top:20%;
    }
`

export const EmailLabel = styled.label`
    @media(max-width:767px){
    position:relative;
    left:1rem;
    }

    @media(min-height:500; max-height:620px){
    position:relative;
    top:20%;
    }
`
