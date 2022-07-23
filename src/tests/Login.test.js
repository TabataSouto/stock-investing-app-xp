import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRedux from './helpers/renderWithRouter';
import Login from '../pages/Login';

describe('Validação página de Login', () => {
  describe('Valida se', () => {
    beforeEach(() => {
      renderWithRedux(<Login />);
    });

    it('existe um input de e-mail e p', () => {
      const inputEmail = screen.getByPlaceholderText(/e-mail/i);
      expect(inputEmail).toBeInTheDocument();
    });
  });
});
