import React from 'react';
import { useSelector } from 'react-redux';
import Style from './Style';

function Ticket() {
  const [asset] = useSelector((state) => state.negotiation.asset);

  return (
    <Style.TableTicket>
      <Style.TheadTicket>
        <tr>
          <th>Ação</th>
          <th>Quantidade</th>
          <th>Valor (R$)</th>
        </tr>
      </Style.TheadTicket>
      <Style.TbodyTicket>
        <tr>
          <td>{ asset.paper }</td>
          <td>{ asset.quantity }</td>
          <td>{ asset.amount }</td>
        </tr>
      </Style.TbodyTicket>
    </Style.TableTicket>
  );
}

export default Ticket;
