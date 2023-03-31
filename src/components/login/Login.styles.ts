import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 64px;
`;

export const StyledHeading = styled.span`
  font-size: 36px;
  font-weight: 600;
  margin-top: 32px;
  margin-bottom: 8px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 20rem;
  margin-top: 16px;
`;

export const LoginInput = styled.input`
  padding: 6px 12px;
  font-size: 18px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  outline: transparent solid 2px;
`;

export const LoginButton = styled.button`
  padding: 16px;
  border: 0;
  background-color: #24a0ed;
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
`;

export const ValidationError = styled.span`
  color: red;
  font-size: 13px;
`