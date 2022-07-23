import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRedux from './helpers/renderWithRouter';
import Login from '../pages/Login';

const CORRECT_EMAIL = 'exemplo@gmail.com';
const CORRECT_PASSWORD = '123456';
const WRONG_EMAIL = 'exemplo.com';
const WRONG_PASSWORD = '1234';

describe('Verifique se na página de Login', () => {
  beforeEach(() => {
    renderWithRedux(<Login />);
  });

  it('Existe um ícone de segurança com o texto "Ambiente Seguro"', () => {
    const iconSecutiry = screen.getByRole('img', { name: /icone cadeado/i });
    const iconText = screen.getByText(/ambiente seguro/i);
    expect(iconSecutiry && iconText).toBeInTheDocument();
  });
  it('Existe campos de texto para preenchimento do E-mail e Senha', () => {
    const inputEmail = screen.getByPlaceholderText(/e-mail/i);
    const inputPassword = screen.getByPlaceholderText(/senha/i);
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  });
  it('É possível digitar nos campos de E-mail e Senha', () => {
    const inputEmail = screen.getByPlaceholderText(/e-mail/i);
    const inputPassword = screen.getByPlaceholderText(/senha/i);
    userEvent.type(inputEmail, CORRECT_EMAIL);
    userEvent.type(inputPassword, CORRECT_PASSWORD);
    expect(inputEmail).toHaveDisplayValue(CORRECT_EMAIL);
    expect(inputPassword).toHaveDisplayValue(CORRECT_PASSWORD);
  });
  it('Existe o botão "Entrar" desalibitado para acessar a conta', () => {
    const buttonEnter = screen.getByRole('button', { name: /entrar/i });
    expect(buttonEnter).toBeInTheDocument();
    expect(buttonEnter).toBeDisabled();
  });
  it('O botão "Entrar" continua desabilitado ao passar E-mail e Senha errados', () => {
    const inputEmail = screen.getByPlaceholderText(/e-mail/i);
    const inputPassword = screen.getByPlaceholderText(/senha/i);
    const buttonEnter = screen.getByRole('button', { name: /entrar/i });
    userEvent.type(inputEmail, CORRECT_EMAIL);
    userEvent.type(inputPassword, WRONG_PASSWORD);
    expect(buttonEnter).toBeDisabled();
  });
  it('O botão "Entrar" continua desabilitado ao passar o E-mail errado', () => {
    const inputEmail = screen.getByPlaceholderText(/e-mail/i);
    const inputPassword = screen.getByPlaceholderText(/senha/i);
    const buttonEnter = screen.getByRole('button', { name: /entrar/i });
    userEvent.type(inputEmail, WRONG_EMAIL);
    userEvent.type(inputPassword, CORRECT_PASSWORD);
    expect(buttonEnter).toBeDisabled();
  });
  it('O botão "Entrar" continua desabilitado ao passar a Senha errada', () => {
    const inputEmail = screen.getByPlaceholderText(/e-mail/i);
    const inputPassword = screen.getByPlaceholderText(/senha/i);
    const buttonEnter = screen.getByRole('button', { name: /entrar/i });
    userEvent.type(inputEmail, CORRECT_EMAIL);
    userEvent.type(inputPassword, WRONG_PASSWORD);
    expect(buttonEnter).toBeDisabled();
  });
  it('O botão "Entrar" é habilitado ao passar E-mail e Senha corretos', () => {
    const inputEmail = screen.getByPlaceholderText(/e-mail/i);
    const inputPassword = screen.getByPlaceholderText(/senha/i);
    const buttonEnter = screen.getByRole('button', { name: /entrar/i });
    userEvent.type(inputEmail, CORRECT_EMAIL);
    userEvent.type(inputPassword, CORRECT_PASSWORD);
    expect(buttonEnter).toBeEnabled();
  });
});
