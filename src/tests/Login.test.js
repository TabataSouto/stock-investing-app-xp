import React from 'react';
import { screen, render } from '@testing-library/react';
import renderWithRedux from './helpers/renderWithRouter';
// import reducer from '../redux'
import Login from '../pages/Login';

describe('Validação página de Login', () => {
  describe('Valida se', () => {
    beforeEach(() => {
      render(renderWithRedux(<Login />));
    });

    it('existe um input de e-mail e p', () => {
      render(<Login />);
      const inputEmail = screen.getByPlaceholderText(/e-mail/i);
      expect(inputEmail).toBeInTheDocument();
    });
  });
});
