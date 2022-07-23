import styled from 'styled-components';

const FormContainer = styled.section`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.borders.contourContainer};
  display: flex;
  flex-direction: column;
  height: 25em;
  padding: 1cm;
  width: 35em;
  > img {
    width: 16px;
    position: absolute;
    margin: 5cm 0.3cm;
  }
`;

const DivForm = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  margin-bottom: 1.5cm;
  & p {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

const DivToken = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  height: 5cm;
  justify-content: center;
  & span {
    font-weight: 700;
    text-transform: uppercase;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 20em;
  justify-content: space-between;
  & input {
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.borders.bottomInput};
    font-size: 16px;
    outline: none;
    padding: 12px;
    text-align: center;
    width: 100%;
  }
  & button {
    background: ${({ theme }) => theme.backgrounds.disabledButton};
    border: none;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 2px;
    padding: 1.5em;
    transition: background 1s;
    text-transform: uppercase;
    &:enabled {
      background: ${({ theme }) => theme.backgrounds.enabledButton};
    }
  }
`;

export default {
  FormContainer,
  Form,
  DivForm,
  DivToken,
};
