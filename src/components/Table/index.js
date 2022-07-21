import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

function Table({ orders }) {
  const navigate = useNavigate();

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Lado</th>
            <th>Papel</th>
            <th>Lote</th>
            <th>Preço Médio</th>
            <th>Quantidade</th>
            <th>Status</th>
            <th>Data/Hora</th>
          </tr>
        </thead>
        <tbody>
          { orders.map(({
            paper, isBuy, direction, amount, quantity, status, dataAndHour,
          }) => (
            <tr key={paper}>
              <td>{isBuy ? 'compra' : 'venda'}</td>
              <td>{paper}</td>
              <td>{direction}</td>
              <td>{amount}</td>
              <td>{quantity}</td>
              <td>{status}</td>
              <td>{dataAndHour}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button
        name="go-back"
        disabled={false}
        onClick={() => navigate('/assets')}
        title="Voltar"
      />
    </section>
  );
}

Table.propTypes = {
  orders: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};

export default Table;
