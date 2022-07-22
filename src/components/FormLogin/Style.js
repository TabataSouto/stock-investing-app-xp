import styled from 'styled-components';

const FormContainer = styled.section`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.borders.login.contour};
  display: flex;
  flex-direction: column;
  height: 25em;
  padding: 1cm;
  width: 35em;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: inherit;
  justify-content: space-evenly;
  & input {
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.borders.login.bottom};
    font-size: 16px;
    outline: none;
    padding: 12px;
    text-align: center;
    width: 100%;
    &::placeholder {
      color: ${({ theme }) => theme.colors.login.placeholder}
    }
  }
  & button {
    background: ${({ theme }) => theme.buttons.login.buttonDisabled};
    border: none;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 2px;
    margin-top: 0.8cm;
    padding: 1.5em;
    transition: background 1s;
    text-transform: uppercase;
    &:enabled {
      background: ${({ theme }) => theme.buttons.login.buttonEnabled};
    }
  }
`;

const DivForm = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  margin-bottom: 1cm;
  & p {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

const DivToken = styled.div`
  font-size: 18px;

  span {
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export default {
  FormContainer,
  Form,
  DivForm,
  DivToken,
};
