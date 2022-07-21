import React from 'react';
import { useSelector } from 'react-redux';

import Style from './Style';

function Ticket() {
  const [asset] = useSelector((state) => state.negotiation.asset);

  return (
    <section>
      <Style.Div>
        <h4>Ação</h4>
        <h4>Qtde</h4>
        <h4>Valor (R$)</h4>
      </Style.Div>
      <Style.Div>
        <p>{ asset.paper }</p>
        <p>{ asset.quantity }</p>
        <p>{ asset.amount }</p>
      </Style.Div>
    </section>
  );
}

export default Ticket;
