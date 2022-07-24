import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import fetchMock from 'fetch-mock-jest';
import renderWithRedux from './helpers/renderWithRedux';
import Assets from '../pages/Assets';
import assetsMock from './helpers/mockAssets';

describe('Verifique se na página de Ações', () => {
  beforeEach(() => {
    renderWithRedux(
      <Assets />,
      { initialState: { login: { email: 'lala@gmail.com', password: '1256345' } } },
    );
  });

  it('Existe um header com o logo e e-mail do usuário logado', () => {
    const header = screen.getByRole('banner');
    const iconLogo = screen.getByRole('img', { name: /marca logo da empresa/i });
    // const loggedUser = screen.getByText(/lala@gmail.com/i);
    expect(header).toBeInTheDocument();
    expect(iconLogo).toBeInTheDocument();
    // expect(loggedUser).toBeInTheDocument();
  });
  it('Existe uma tabela com o título "Minhas Ações:', () => {
    const myAssets = screen.getByRole('heading', { name: /minhas ações/i });
    expect(myAssets).toBeInTheDocument();
  });
  it('Existem ações disponíveis para venda e compra', async () => {
    fetchMock.getOnce(
      'https://asset-db-prsl-xp.herokuapp.com/assets',
      assetsMock,
    );
    await waitFor(() => expect(fetchMock.called()).toBeTruthy());
  });
});
