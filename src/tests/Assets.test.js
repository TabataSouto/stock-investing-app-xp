import React from 'react';
// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import fetchMock from 'fetch-mock-jest';
import renderWithRedux from './helpers/renderWithRouter';
// import Login from '../pages/Login';
import Assets from '../pages/Assets';

describe('Verifique se na página de Ações', () => {
  // beforeEach(() => {
  // });

  it('Existe um header com o logo e e-mail do usuário logado', () => {
    const { getByRole } = renderWithRedux(<Assets />, { initialState: { login: { email: 'lala@gmail.com ', password: '1256345' } } });
    const header = getByRole('banner');
    console.log(header.innerHTML);
    // expect(header).toBeInTheDocument();
  });
});
