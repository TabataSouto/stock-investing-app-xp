import React from 'react';
import PropTypes from 'prop-types';
import Style from './Style';

function Table({ orders }) {
  return (
    <Style.OrdersTable>
      <Style.OrdersThead>
        <tr>
          <th>Lado</th>
          <th>Papel</th>
          <th>Lote</th>
          <th>Preço Médio</th>
          <th>Quantidade</th>
          <th>Status</th>
          <th>Data/Hora</th>
        </tr>
      </Style.OrdersThead>
      <Style.OrdersTbody>
        { orders.map(({
          paper, isBuy, direction, amount, quantity, status, dataAndHour,
        }) => (
          <tr key={dataAndHour}>
            <td>{isBuy ? 'Compra' : 'Venda'}</td>
            <td>{paper}</td>
            <td>{direction}</td>
            <td>{(amount).toFixed(2)}</td>
            <td>{quantity}</td>
            <td>{status}</td>
            <td>{dataAndHour}</td>
          </tr>
        ))}
      </Style.OrdersTbody>
    </Style.OrdersTable>
  );
}

Table.propTypes = {
  orders: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};

export default Table;
